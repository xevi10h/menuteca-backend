import { supabase } from '@/database/client';
import {
	Menu,
	CreateMenuInput,
	UpdateMenuInput,
	LocalizedMenu,
	LocalizedDish,
} from '@/types/entities';
import { Language } from '@/types/common';
import { DishService } from './dishService';
import {
	createUserTranslatedText,
	mergeTranslatedText,
	getLocalizedText,
} from '@/utils/localization';
import { hasTimeOverlap } from '@/utils/timeUtils';
import { AppError } from '@/middleware/errorHandler';

export class MenuService {
	/**
	 * Create a new menu
	 */
	static async createMenu(
		menuData: CreateMenuInput,
		userLanguage: Language,
	): Promise<Menu> {
		// Create translated text for name
		const nameTranslated = createUserTranslatedText(
			menuData.name,
			userLanguage,
		);

		const { data, error } = await supabase
			.from('menus')
			.insert({
				...menuData,
				name: nameTranslated,
			})
			.select()
			.single();

		if (error) {
			if (error.code === '23503') {
				throw new AppError('Invalid restaurant ID', 400);
			}
			throw new AppError('Failed to create menu', 500);
		}

		return data as Menu;
	}

	/**
	 * Get menu by ID (raw data)
	 */
	static async getMenuById(menuId: string): Promise<Menu | null> {
		const { data, error } = await supabase
			.from('menus')
			.select('*')
			.eq('id', menuId)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				return null;
			}
			throw new AppError('Failed to fetch menu', 500);
		}

		return data as Menu;
	}

	/**
	 * Get localized menu by ID
	 */
	static async getLocalizedMenuById(
		menuId: string,
		userLanguage: Language,
	): Promise<LocalizedMenu | null> {
		const menu = await this.getMenuById(menuId);
		if (!menu) {
			return null;
		}

		return this.localizeMenu(menu, userLanguage);
	}

	/**
	 * Get all menus for a restaurant
	 */
	static async getMenusByRestaurant(
		restaurantId: string,
		userLanguage: Language,
	): Promise<LocalizedMenu[]> {
		const { data, error } = await supabase
			.from('menus')
			.select('*')
			.eq('restaurant_id', restaurantId)
			.eq('is_active', true)
			.order('created_at', { ascending: true });

		if (error) {
			throw new AppError('Failed to fetch menus', 500);
		}

		return Promise.all(
			(data || []).map(async (menu: Menu) => {
				const localizedMenu = this.localizeMenu(menu, userLanguage);

				// Get dishes for this menu
				const dishes = await DishService.getDishesByMenu(menu.id, userLanguage);

				return {
					...localizedMenu,
					dishes,
				};
			}),
		);
	}

	/**
	 * Update menu
	 */
	static async updateMenu(
		menuId: string,
		updateData: UpdateMenuInput,
		userLanguage: Language,
	): Promise<Menu> {
		// Handle name translation update
		let finalUpdateData = { ...updateData };

		if (updateData.name) {
			// Get existing menu to merge translations
			const existingMenu = await this.getMenuById(menuId);
			if (existingMenu) {
				finalUpdateData.name = mergeTranslatedText(
					existingMenu.name,
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

		const { data, error } = await supabase
			.from('menus')
			.update(finalUpdateData)
			.eq('id', menuId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				throw new AppError('Menu not found', 404);
			}
			throw new AppError('Failed to update menu', 500);
		}

		return data as Menu;
	}

	/**
	 * Delete menu
	 */
	static async deleteMenu(menuId: string): Promise<void> {
		// First delete all dishes in this menu
		await supabase.from('dishes').delete().eq('menu_id', menuId);

		// Then delete the menu
		const { error } = await supabase.from('menus').delete().eq('id', menuId);

		if (error) {
			throw new AppError('Failed to delete menu', 500);
		}
	}

	/**
	 * Get available menus for a specific day and time
	 */
	static async getAvailableMenus(
		restaurantId: string,
		day: string,
		time: string,
		userLanguage: Language,
	): Promise<LocalizedMenu[]> {
		const { data, error } = await supabase
			.from('menus')
			.select('*')
			.eq('restaurant_id', restaurantId)
			.eq('is_active', true)
			.contains('days', [day]);

		if (error) {
			throw new AppError('Failed to fetch available menus', 500);
		}

		// Filter by time overlap
		const availableMenus = (data || []).filter((menu: Menu) => {
			return hasTimeOverlap(
				menu.start_time,
				menu.end_time,
				time,
				time, // Same time for both start and end of query
			);
		});

		return Promise.all(
			availableMenus.map(async (menu: Menu) => {
				const localizedMenu = this.localizeMenu(menu, userLanguage);

				// Get dishes for this menu
				const dishes = await DishService.getDishesByMenu(menu.id, userLanguage);

				return {
					...localizedMenu,
					dishes,
				};
			}),
		);
	}

	/**
	 * Search menus
	 */
	static async searchMenus(
		query: string,
		userLanguage: Language,
		restaurantId?: string,
	): Promise<LocalizedMenu[]> {
		let dbQuery = supabase.from('menus').select('*').eq('is_active', true);

		if (restaurantId) {
			dbQuery = dbQuery.eq('restaurant_id', restaurantId);
		}

		const { data, error } = await dbQuery;

		if (error) {
			throw new AppError('Failed to search menus', 500);
		}

		const searchTerm = query.toLowerCase();

		// Filter menus by name in user's language
		const filteredMenus = (data || []).filter((menu: Menu) => {
			const localizedName = getLocalizedText(
				menu.name,
				userLanguage,
			).toLowerCase();
			return localizedName.includes(searchTerm);
		});

		return Promise.all(
			filteredMenus.map(async (menu: Menu) => {
				const localizedMenu = this.localizeMenu(menu, userLanguage);

				// Get dishes for this menu
				const dishes = await DishService.getDishesByMenu(menu.id, userLanguage);

				return {
					...localizedMenu,
					dishes,
				};
			}),
		);
	}

	/**
	 * Get menu statistics
	 */
	static async getMenuStats(restaurantId?: string): Promise<{
		total: number;
		active: number;
		byDay: Record<string, number>;
	}> {
		let query = supabase.from('menus').select('*');

		if (restaurantId) {
			query = query.eq('restaurant_id', restaurantId);
		}

		const { data, error } = await query;

		if (error) {
			throw new AppError('Failed to get menu statistics', 500);
		}

		const total = data?.length || 0;
		const active = data?.filter((menu: Menu) => menu.is_active).length || 0;

		const byDay: Record<string, number> = {
			monday: 0,
			tuesday: 0,
			wednesday: 0,
			thursday: 0,
			friday: 0,
			saturday: 0,
			sunday: 0,
		};

		data?.forEach((menu: Menu) => {
			menu.days.forEach((day: string) => {
				if (byDay[day] !== undefined) {
					byDay[day]++;
				}
			});
		});

		return {
			total,
			active,
			byDay,
		};
	}

	/**
	 * Convert menu to localized version
	 */
	private static localizeMenu(
		menu: Menu,
		userLanguage: Language,
	): LocalizedMenu {
		return {
			id: menu.id,
			restaurant_id: menu.restaurant_id,
			name: getLocalizedText(menu.name, userLanguage),
			days: menu.days,
			start_time: menu.start_time,
			end_time: menu.end_time,
			price: menu.price,
			first_courses_to_share: menu.first_courses_to_share,
			second_courses_to_share: menu.second_courses_to_share,
			desserts_to_share: menu.desserts_to_share,
			includes_bread: menu.includes_bread,
			drinks: menu.drinks,
			includes_coffee_and_dessert: menu.includes_coffee_and_dessert,
			minimum_people: menu.minimum_people,
			has_minimum_people: menu.has_minimum_people,
			dishes: [], // Will be populated separately
		};
	}
}
