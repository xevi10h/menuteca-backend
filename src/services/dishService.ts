import { supabase } from '@/database/client';
import {
	Dish,
	CreateDishInput,
	UpdateDishInput,
	LocalizedDish,
} from '@/types/entities';
import { Language, DishCategory, TranslatedText } from '@/types/common';
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
				menus!inner(restaurant_id)
			`,
			)
			.eq('menus.restaurant_id', restaurantId)
			.eq('category', category)
			.eq('is_active', true)
			.order('created_at');

		if (error) {
			throw new AppError('Failed to fetch dishes by category', 500);
		}

		return (data || []).map((dish: any) =>
			this.localizeDish(dish as Dish, userLanguage),
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
		// Handle name and description translation updates
		let finalUpdateData: any = { ...updateData };

		if (updateData.name) {
			const existingDish = await this.getDishById(dishId);
			if (existingDish) {
				finalUpdateData.name = mergeTranslatedText(
					existingDish.name,
					updateData.name,
					userLanguage,
				);
			} else {
				finalUpdateData.name = createUserTranslatedText(
					updateData.name,
					userLanguage,
				);
			}
		}

		if (updateData.description) {
			const existingDish = await this.getDishById(dishId);
			if (existingDish) {
				finalUpdateData.description = mergeTranslatedText(
					existingDish.description,
					updateData.description,
					userLanguage,
				);
			} else {
				finalUpdateData.description = createUserTranslatedText(
					updateData.description,
					userLanguage,
				);
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
	 * Search dishes by name or description
	 */
	static async searchDishes(
		query: string,
		userLanguage: Language,
		filters: any = {},
	): Promise<LocalizedDish[]> {
		let dbQuery = supabase
			.from('dishes')
			.select(
				`
				*,
				menus!inner(id, restaurant_id)
			`,
			)
			.eq('is_active', true);

		// Apply filters
		if (filters.restaurant_id) {
			dbQuery = dbQuery.eq('menus.restaurant_id', filters.restaurant_id);
		}

		if (filters.menu_id) {
			dbQuery = dbQuery.eq('menu_id', filters.menu_id);
		}

		if (filters.category) {
			dbQuery = dbQuery.eq('category', filters.category);
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

		const { data, error } = await dbQuery.order('created_at', {
			ascending: false,
		});

		if (error) {
			throw new AppError('Failed to search dishes', 500);
		}

		const searchTerm = query.toLowerCase();

		// Filter dishes by name or description in user's language
		const filteredDishes = (data || []).filter((dish: any) => {
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

		return filteredDishes.map((dish: any) =>
			this.localizeDish(dish as Dish, userLanguage),
		);
	}

	/**
	 * Get dishes by dietary preferences
	 */
	static async getDishesByDietaryPreferences(
		menuId: string,
		userLanguage: Language,
		preferences: {
			vegetarian?: boolean;
			vegan?: boolean;
			glutenFree?: boolean;
			lactoseFree?: boolean;
			spicy?: boolean;
		},
	): Promise<LocalizedDish[]> {
		let query = supabase
			.from('dishes')
			.select('*')
			.eq('menu_id', menuId)
			.eq('is_active', true);

		if (preferences.vegetarian) {
			query = query.eq('is_vegetarian', true);
		}

		if (preferences.vegan) {
			query = query.eq('is_vegan', true);
		}

		if (preferences.glutenFree) {
			query = query.eq('is_gluten_free', true);
		}

		if (preferences.lactoseFree) {
			query = query.eq('is_lactose_free', true);
		}

		if (preferences.spicy !== undefined) {
			query = query.eq('is_spicy', preferences.spicy);
		}

		query = query.order('category').order('created_at');

		const { data, error } = await query;

		if (error) {
			throw new AppError('Failed to fetch dishes by dietary preferences', 500);
		}

		return (data || []).map((dish: Dish) =>
			this.localizeDish(dish, userLanguage),
		);
	}

	/**
	 * Get dishes by category for multiple menus
	 */
	static async getDishesByCategoryForMenus(
		menuIds: string[],
		category: DishCategory,
		userLanguage: Language,
	): Promise<LocalizedDish[]> {
		const { data, error } = await supabase
			.from('dishes')
			.select('*')
			.in('menu_id', menuIds)
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
	 * Get dish statistics for a menu
	 */
	static async getDishStats(menuId: string): Promise<{
		total: number;
		byCategory: Record<string, number>;
		dietary: {
			vegetarian: number;
			vegan: number;
			glutenFree: number;
			lactoseFree: number;
			spicy: number;
		};
		averageExtraPrice: number;
	}> {
		const { data, error } = await supabase
			.from('dishes')
			.select('*')
			.eq('menu_id', menuId)
			.eq('is_active', true);

		if (error) {
			throw new AppError('Failed to get dish statistics', 500);
		}

		const total = data?.length || 0;

		const byCategory: Record<string, number> = {};
		const dietary = {
			vegetarian: 0,
			vegan: 0,
			glutenFree: 0,
			lactoseFree: 0,
			spicy: 0,
		};

		let totalExtraPrice = 0;

		data?.forEach((dish: Dish) => {
			// Count by category
			byCategory[dish.category] = (byCategory[dish.category] || 0) + 1;

			// Count dietary preferences
			if (dish.is_vegetarian) dietary.vegetarian++;
			if (dish.is_vegan) dietary.vegan++;
			if (dish.is_gluten_free) dietary.glutenFree++;
			if (dish.is_lactose_free) dietary.lactoseFree++;
			if (dish.is_spicy) dietary.spicy++;

			// Sum extra prices
			totalExtraPrice += dish.extra_price;
		});

		const averageExtraPrice = total > 0 ? totalExtraPrice / total : 0;

		return {
			total,
			byCategory,
			dietary,
			averageExtraPrice: Math.round(averageExtraPrice * 100) / 100,
		};
	}

	/**
	 * Get popular dishes (most common across restaurants)
	 */
	static async getPopularDishes(
		userLanguage: Language,
		limit: number = 10,
	): Promise<LocalizedDish[]> {
		// This is a simplified approach - in a real app you might track popularity differently
		const { data, error } = await supabase
			.from('dishes')
			.select('*')
			.eq('is_active', true)
			.order('created_at', { ascending: false })
			.limit(limit);

		if (error) {
			throw new AppError('Failed to fetch popular dishes', 500);
		}

		return (data || []).map((dish: Dish) =>
			this.localizeDish(dish, userLanguage),
		);
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

	/**
	 * Bulk update dishes
	 */
	static async bulkUpdateDishes(
		dishIds: string[],
		updateData: Partial<UpdateDishInput>,
	): Promise<void> {
		const { error } = await supabase
			.from('dishes')
			.update(updateData)
			.in('id', dishIds);

		if (error) {
			throw new AppError('Failed to bulk update dishes', 500);
		}
	}

	/**
	 * Duplicate dish
	 */
	static async duplicateDish(
		dishId: string,
		newMenuId: string,
		userLanguage: Language,
	): Promise<Dish> {
		const originalDish = await this.getDishById(dishId);
		if (!originalDish) {
			throw new AppError('Original dish not found', 404);
		}

		const { id, created_at, updated_at, ...dishData } = originalDish;

		const duplicatedDish = await this.createDish(
			{
				...dishData,
				menu_id: newMenuId,
				name: getLocalizedText(originalDish.name, userLanguage),
				description: getLocalizedText(originalDish.description, userLanguage),
			},
			userLanguage,
		);

		return duplicatedDish;
	}
}
