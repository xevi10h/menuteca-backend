import { Request, Response, RequestHandler } from 'express';
import { MenuService } from '@/services/menuService';
import {
	validateData,
	createMenuSchema,
	updateMenuSchema,
} from '@/utils/validation';
import { ApiResponse } from '@/types/common';
import { Menu, LocalizedMenu } from '@/types/entities';
import { asyncHandler } from '@/middleware/errorHandler';
import { RestaurantService } from '@/services/restaurantService';

/**
 * Create a new menu
 */
export const createMenu: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Menu>>) => {
		const { restaurantId } = req.params;
		const { isValid, data, errors } = validateData(createMenuSchema, {
			...req.body,
			restaurant_id: restaurantId,
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

		// Check restaurant ownership
		const restaurant = await RestaurantService.getRestaurantById(restaurantId);
		if (!restaurant) {
			res.status(404).json({
				success: false,
				error: 'Restaurant not found',
			});
			return;
		}

		if (restaurant.owner_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to create menus for this restaurant',
			});
			return;
		}

		const menu = await MenuService.createMenu(data!, req.user.language);

		res.status(201).json({
			success: true,
			data: menu,
			message: 'Menu created successfully',
		});
	},
);

/**
 * Get all menus for a restaurant
 */
export const getRestaurantMenus: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedMenu[]>>) => {
		const { restaurantId } = req.params;
		const userLanguage = req.user?.language || 'es_ES';

		const menus = await MenuService.getMenusByRestaurant(
			restaurantId,
			userLanguage,
		);

		res.json({
			success: true,
			data: menus,
		});
	},
);

/**
 * Get menu by ID
 */
export const getMenuById: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedMenu>>) => {
		const { id } = req.params;
		const userLanguage = req.user?.language || 'es_ES';

		const menu = await MenuService.getLocalizedMenuById(id, userLanguage);

		if (!menu) {
			res.status(404).json({
				success: false,
				error: 'Menu not found',
			});
			return;
		}

		res.json({
			success: true,
			data: menu,
		});
	},
);

/**
 * Update menu (owner only)
 */
export const updateMenu: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Menu>>) => {
		const { id } = req.params;
		const { isValid, data, errors } = validateData(updateMenuSchema, req.body);

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
		const menu = await MenuService.getMenuById(id);
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
				error: 'Not authorized to update this menu',
			});
			return;
		}

		const updatedMenu = await MenuService.updateMenu(
			id,
			data!,
			req.user.language,
		);

		res.json({
			success: true,
			data: updatedMenu,
			message: 'Menu updated successfully',
		});
	},
);

/**
 * Delete menu (owner only)
 */
export const deleteMenu: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse>) => {
		const { id } = req.params;

		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		// Check ownership through menu -> restaurant
		const menu = await MenuService.getMenuById(id);
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
				error: 'Not authorized to delete this menu',
			});
			return;
		}

		await MenuService.deleteMenu(id);

		res.json({
			success: true,
			message: 'Menu deleted successfully',
		});
	},
);

/**
 * Get available menus for current time and day
 */
export const getAvailableMenus: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedMenu[]>>) => {
		const { restaurantId } = req.params;
		const { day, time } = req.query;

		if (!day || !time) {
			res.status(400).json({
				success: false,
				error: 'Day and time parameters are required',
			});
			return;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const menus = await MenuService.getAvailableMenus(
			restaurantId,
			day as string,
			time as string,
			userLanguage,
		);

		res.json({
			success: true,
			data: menus,
		});
	},
);
