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
        