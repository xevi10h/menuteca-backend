import { Request, Response, RequestHandler } from 'express';
import { DishService } from '@/services/dishService';
import { MenuService } from '@/services/menuService';
import { RestaurantService } from '@/services/restaurantService';
import {
	validateData,
	createDishSchema,
	updateDishSchema,
} from '@/utils/validation';
import { ApiResponse } from '@/types/common';
import { Dish, LocalizedDish } from '@/types/entities';
import { DishCategory } from '@/types/common';
import { asyncHandler } from '@/middleware/errorHandler';

/**
 * Create a new dish
 */
export const createDish: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Dish>>) => {
		const { menuId } = req.params;
		const { isValid, data, errors } = validateData(createDishSchema, {
			...req.body,
			menu_id: menuId,
		});

		if (!isValid) {
			res.status(400).json({
				success: false,
				error: 'Validation error',
				errors,
			});
			return;
		}

		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		// Check ownership through menu -> restaurant
		const menu = await MenuService.getMenuById(menuId);
		if (!menu) {
			res.status(404).json({
				success: false,
				error: 'Menu not found',
			});
			return;
		}

		const restaurant = await RestaurantService.getRestaurantById(
			menu.restaurant_id,
		);
		if (!restaurant || restaurant.owner_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to create dishes for this menu',
			});
			return;
		}

		// Ensure category is properly typed
		const dishData = {
			...data!,
			category: data!.category as DishCategory,
		};

		const dish = await DishService.createDish(dishData, req.user.language);

		res.status(201).json({
			success: true,
			data: dish,
			message: 'Dish created successfully',
		});
	},
);

/**
 * Get all dishes for a menu
 */
export const getMenuDishes: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedDish[]>>) => {
		const { menuId } = req.params;
		const { category } = req.query;
		const userLanguage = req.user?.language || 'es_ES';

		const dishes = await DishService.getDishesByMenu(
			menuId,
			userLanguage,
			category as string,
		);

		res.json({
			success: true,
			data: dishes,
		});
	},
);

/**
 * Get dish by ID
 */
export const getDishById: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedDish>>) => {
		const { id } = req.params;
		const userLanguage = req.user?.language || 'es_ES';

		const dish = await DishService.getLocalizedDishById(id, userLanguage);

		if (!dish) {
			res.status(404).json({
				success: false,
				error: 'Dish not found',
			});
			return;
		}

		res.json({
			success: true,
			data: dish,
		});
	},
);

/**
 * Update dish (owner only)
 */
export const updateDish: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Dish>>) => {
		const { id } = req.params;
		const { isValid, data, errors } = validateData(updateDishSchema, req.body);

		if (!isValid) {
			res.status(400).json({
				success: false,
				error: 'Validation error',
				errors,
			});
			return;
		}

		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		// Check ownership through dish -> menu -> restaurant
		const dish = await DishService.getDishById(id);
		if (!dish) {
			res.status(404).json({
				success: false,
				error: 'Dish not found',
			});
			return;
		}

		const menu = await MenuService.getMenuById(dish.menu_id);
		if (!menu) {
			res.status(404).json({
				success: false,
				error: 'Menu not found',
			});
			return;
		}

		const restaurant = await RestaurantService.getRestaurantById(
			menu.restaurant_id,
		);
		if (!restaurant || restaurant.owner_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to update this dish',
			});
			return;
		}

		// Ensure category is properly typed if provided
		const dishUpdateData = {
			...data!,
			...(data!.category && { category: data!.category as DishCategory }),
		};

		const updatedDish = await DishService.updateDish(
			id,
			dishUpdateData,
			req.user.language,
		);

		res.json({
			success: true,
			data: updatedDish,
			message: 'Dish updated successfully',
		});
	},
);

/**
 * Delete dish (owner only)
 */
export const deleteDish: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse>) => {
		const { id } = req.params;

		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		// Check ownership through dish -> menu -> restaurant
		const dish = await DishService.getDishById(id);
		if (!dish) {
			res.status(404).json({
				success: false,
				error: 'Dish not found',
			});
			return;
		}

		const menu = await MenuService.getMenuById(dish.menu_id);
		if (!menu) {
			res.status(404).json({
				success: false,
				error: 'Menu not found',
			});
			return;
		}

		const restaurant = await RestaurantService.getRestaurantById(
			menu.restaurant_id,
		);
		if (!restaurant || restaurant.owner_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to delete this dish',
			});
			return;
		}

		await DishService.deleteDish(id);

		res.json({
			success: true,
			message: 'Dish deleted successfully',
		});
	},
);

/**
 * Get dishes by category across all menus of a restaurant
 */
export const getDishesByCategory: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedDish[]>>) => {
		const { restaurantId } = req.params;
		const { category } = req.query;

		if (!category) {
			res.status(400).json({
				success: false,
				error: 'Category parameter is required',
			});
			return;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const dishes = await DishService.getDishesByRestaurantAndCategory(
			restaurantId,
			category as string,
			userLanguage,
		);

		res.json({
			success: true,
			data: dishes,
		});
	},
);

/**
 * Search dishes
 */
export const searchDishes: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedDish[]>>) => {
		const {
			q: query,
			restaurant_id,
			menu_id,
			vegetarian,
			vegan,
			gluten_free,
		} = req.query;

		if (!query || typeof query !== 'string' || query.length < 2) {
			res.status(400).json({
				success: false,
				error: 'Search query must be at least 2 characters long',
			});
			return;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const filters: any = {};
		if (restaurant_id) filters.restaurant_id = restaurant_id;
		if (menu_id) filters.menu_id = menu_id;
		if (vegetarian === 'true') filters.is_vegetarian = true;
		if (vegan === 'true') filters.is_vegan = true;
		if (gluten_free === 'true') filters.is_gluten_free = true;

		const dishes = await DishService.searchDishes(query, userLanguage, filters);

		res.json({
			success: true,
			data: dishes,
		});
	},
);
