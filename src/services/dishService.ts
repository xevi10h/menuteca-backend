import { supabase } from '@/database/client';
import {
	Dish,
	CreateDishInput,
	UpdateDishInput,
	LocalizedDish,
} from '@/types/entities';
import { Language, DishCategory } from '@/types/common';
import {
	createUserTranslatedText,
	mergeTranslatedText,
	getLocalizedText,
} from '@/utils/localization';
import { AppError } from '@/middleware/errorHandler';

export class DishService {
	/**
	 * Create a new dish
	 */
	static async createDish(
		dishData: CreateDishInput,
		userLanguage: Language,
	): Promise<Dish> {
		// Create translated text for name and description
		const nameTranslated = createUserTranslatedText(
			dishData.name,
			userLanguage,
		);
		const descriptionTranslated = createUserTranslatedText(
			dishData.description,
			userLanguage,
		);

		const { data, error } = await supabase
			.from('dishes')
			.insert({
				...dishData,
				name: nameTranslated,
				description: descriptionTranslated,
			})
			.select()
			.single();

		if (error) {
			if (error.code === '23503') {
				throw new AppError('Invalid menu ID', 400);
			}
			throw new AppError('Failed to create dish', 500);
		}

		return data as Dish;
	}

	/**
	 * Get dish by ID (raw data)
	 */
	static async getDishById(dishId: string): Promise<Dish | null> {
		const { data, error } = await supabase
			.from('dishes')
			.select('*')
			.eq('id', dishId)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				return null;
			}
			throw new AppError('Failed to fetch dish', 500);
		}

		return data as Dish;
	}

	/**
	 * Get localized dish by ID
	 */
	static async getLocalizedDishById(
		dishId: string,
		userLanguage: Language,
	): Promise<LocalizedDish | null> {
		const dish = await this.getDishById(dishId);
		if (!dish) {
			return null;
		}

		return this.localizeDish(dish, userLanguage);
	}

	/**
	 * Get all dishes for a menu
	 */
	static async getDishesByMenu(
		menuId: string,
		userLanguage: Language,
		category?: string,
	): Promise<LocalizedDish[]> {
		let query = supabase
			.from('dishes')
			.select('*')
			.eq('menu_id', menuId)
			.eq('is_active', true);

		if (category) {
			query = query.eq('category', category);
		}

		query = query.order('category').order('created_at');

		const { data, error } = await query;

		if (error) {
			throw new AppError('Failed to fetch dishes', 500);
		}

		return (data || []).map((dish: Dish) =>
			this.localizeDish(dish, userLanguage),
		);
	}

	/**
	 * Get dishes by restaurant and category
	 */
	static async getDishesByRestaurantAndCategory(
		restaurantId: string,
		category: string,
		userLanguage: Language,
	): Promise<LocalizedDish[]> {
		const { data, error } = await supabase
			.from('dishes')
			.select(
				`
				*,
				menus!inner(id, restaurant_id)
			`,
			)
			.eq('menus.restaurant_id', restaurantId)
			.eq('category', category)
			.eq('is_active', true)
			.order('created_at');

		if (error) {
			throw new AppError('Failed to fetch dishes by category', 500);
		}

		return (data || []).map((dish: Dish) =>
			this.localizeDish(dish, userLanguage),
		);
	}

	/**
	 * Update dish
	 */
	static async updateDish(
		dishId: string,
		updateData: UpdateDishInput,
		userLanguage: Language,
	): Promise<Dish> {
		// Handle translation updates
		let finalUpdateData = { ...updateData };

		if (updateData.name || updateData.description) {
			const existingDish = await this.getDishById(dishId);
			if (existingDish) {
				if (updateData.name) {
					finalUpdateData.name = mergeTranslatedText(
						existingDish.name,
						updateData.name,
						userLanguage,
					);
				}
				if (updateData.description) {
					finalUpdateData.description = mergeTranslatedText(
						existingDish.description,
						updateData.description,
						userLanguage,
					);
				}
			} else {
				if (updateData.name) {
					finalUpdateData.name = createUserTranslatedText(
						updateData.name,
						userLanguage,
					);
				}
				if (updateData.description) {
					finalUpdateData.description = createUserTranslatedText(
						updateData.description,
						userLanguage,
					);
				}
			}
		}

		const { data, error } = await supabase
			.from('dishes')
			.update(finalUpdateData)
			.eq('id', dishId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				throw new AppError('Dish not found', 404);
			}
			throw new AppError('Failed to update dish', 500);
		}

		return data as Dish;
	}

	/**
	 * Delete dish
	 */
	static async deleteDish(dishId: string): Promise<void> {
		const { error } = await supabase.from('dishes').delete().eq('id', dishId);

		if (error) {
			throw new AppError('Failed to delete dish', 500);
		}
	}

	/**
	 * Search dishes
	 */
	static async searchDishes(
		query: string,
		userLanguage: Language,
		filters: any = {},
	): Promise<LocalizedDish[]> {
		let dbQuery = supabase.from('dishes').select('*').eq('is_active', true);

		// Apply filters
		if (filters.menu_id) {
			dbQuery = dbQuery.eq('menu_id', filters.menu_id);
		}

		if (filters.restaurant_id) {
			dbQuery = dbQuery
				.select(
					`
				*,
				menus!inner(id, restaurant_id)
			`,
				)
				.eq('menus.restaurant_id', filters.restaurant_id);
		}

		if (filters.is_vegetarian) {
			dbQuery = dbQuery.eq('is_vegetarian', true);
		}

		if (filters.is_vegan) {
			dbQuery = dbQuery.eq('is_vegan', true);
		}

		if (filters.is_gluten_free) {
			dbQuery = dbQuery.eq('is_gluten_free', true);
		}

		const { data, error } = await dbQuery;

		if (error) {
			throw new AppError('Failed to search dishes', 500);
		}

		const searchTerm = query.toLowerCase();

		// Filter dishes by name and description in user's language
		const filteredDishes = (data || []).filter((dish: Dish) => {
			const localizedName = getLocalizedText(
				dish.name,
				userLanguage,
			).toLowerCase();
			const localizedDescription = getLocalizedText(
				dish.description,
				userLanguage,
			).toLowerCase();
			return (
				localizedName.includes(searchTerm) ||
				localizedDescription.includes(searchTerm)
			);
		});

		return filteredDishes.map((dish: Dish) =>
			this.localizeDish(dish, userLanguage),
		);
	}

	/**
	 * Get dishes by dietary restrictions
	 */
	static async getDishesByDietaryRestrictions(
		menuId: string,
		restrictions: {
			isVegetarian?: boolean;
			isVegan?: boolean;
			isGlutenFree?: boolean;
			isLactoseFree?: boolean;
			isSpicy?: boolean;
		},
		userLanguage: Language,
	): Promise<LocalizedDish[]> {
		let query = supabase
			.from('dishes')
			.select('*')
			.eq('menu_id', menuId)
			.eq('is_active', true);

		if (restrictions.isVegetarian) {
			query = query.eq('is_vegetarian', true);
		}

		if (restrictions.isVegan) {
			query = query.eq('is_vegan', true);
		}

		if (restrictions.isGlutenFree) {
			query = query.eq('is_gluten_free', true);
		}

		if (restrictions.isLactoseFree) {
			query = query.eq('is_lactose_free', true);
		}

		if (restrictions.isSpicy !== undefined) {
			query = query.eq('is_spicy', restrictions.isSpicy);
		}

		const { data, error } = await query.order('category').order('created_at');

		if (error) {
			throw new AppError('Failed to fetch dishes by dietary restrictions', 500);
		}

		return (data || []).map((dish: Dish) =>
			this.localizeDish(dish, userLanguage),
		);
	}

	/**
	 * Get dish statistics
	 */
	static async getDishStats(menuId?: string): Promise<{
		total: number;
		active: number;
		byCategory: Record<string, number>;
		dietaryOptions: {
			vegetarian: number;
			vegan: number;
			glutenFree: number;
			lactoseFree: number;
			spicy: number;
		};
	}> {
		let query = supabase.from('dishes').select('*');

		if (menuId) {
			query = query.eq('menu_id', menuId);
		}

		const { data, error } = await query;

		if (error) {
			throw new AppError('Failed to get dish statistics', 500);
		}

		const total = data?.length || 0;
		const active = data?.filter((dish: Dish) => dish.is_active).length || 0;

		const byCategory: Record<string, number> = {};
		Object.values(DishCategory).forEach((category) => {
			byCategory[category] = 0;
		});

		const dietaryOptions = {
			vegetarian: 0,
			vegan: 0,
			glutenFree: 0,
			lactoseFree: 0,
			spicy: 0,
		};

		data?.forEach((dish: Dish) => {
			// Count by category
			if (byCategory[dish.category] !== undefined) {
				byCategory[dish.category]++;
			}

			// Count dietary options
			if (dish.is_vegetarian) dietaryOptions.vegetarian++;
			if (dish.is_vegan) dietaryOptions.vegan++;
			if (dish.is_gluten_free) dietaryOptions.glutenFree++;
			if (dish.is_lactose_free) dietaryOptions.lactoseFree++;
			if (dish.is_spicy) dietaryOptions.spicy++;
		});

		return {
			total,
			active,
			byCategory,
			dietaryOptions,
		};
	}

	/**
	 * Convert dish to localized version
	 */
	private static localizeDish(
		dish: Dish,
		userLanguage: Language,
	): LocalizedDish {
		return {
			id: dish.id,
			menu_id: dish.menu_id,
			name: getLocalizedText(dish.name, userLanguage),
			description: getLocalizedText(dish.description, userLanguage),
			extra_price: dish.extra_price,
			category: dish.category,
			is_vegetarian: dish.is_vegetarian,
			is_lactose_free: dish.is_lactose_free,
			is_spicy: dish.is_spicy,
			is_gluten_free: dish.is_gluten_free,
			is_vegan: dish.is_vegan,
		};
	}
}
