import { Request, Response, RequestHandler } from 'express';
import { RestaurantService } from '@/services/restaurantService';
import {
	validateData,
	createRestaurantSchema,
	updateRestaurantSchema,
} from '@/utils/validation';
import { ApiResponse, PaginatedResponse } from '@/types/common';
import { Restaurant, RestaurantWithDetails } from '@/types/entities';
import { asyncHandler } from '@/middleware/errorHandler';

/**
 * Create a new restaurant
 */
export const createRestaurant: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Restaurant>>) => {
		const { isValid, data, errors } = validateData(
			createRestaurantSchema,
			req.body,
		);

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

		const restaurant = await RestaurantService.createRestaurant({
			...data!,
			owner_id: req.user.userId,
		});

		res.status(201).json({
			success: true,
			data: restaurant,
			message: 'Restaurant created successfully',
		});
	},
);

/**
 * Get all restaurants with filters and pagination
 */
export const getAllRestaurants: RequestHandler = asyncHandler(
	async (
		req: Request,
		res: Response<ApiResponse<PaginatedResponse<RestaurantWithDetails>>>,
	) => {
		const {
			page: pageStr,
			limit: limitStr,
			sortBy,
			sortOrder,
			cuisine_id,
			min_price,
			max_price,
			min_rating,
			tags,
			latitude,
			longitude,
			radius,
			search,
		} = req.query;

		const page = parseInt(pageStr as string) || 1;
		const limit = parseInt(limitStr as string) || 20;

		// Build filters
		const filters: any = {};

		if (cuisine_id) filters.cuisine_id = cuisine_id;
		if (min_price) filters.min_price = parseFloat(min_price as string);
		if (max_price) filters.max_price = parseFloat(max_price as string);
		if (min_rating) filters.min_rating = parseFloat(min_rating as string);
		if (tags) filters.tags = (tags as string).split(',');
		if (search) filters.search = search as string;

		// Location filters
		if (latitude && longitude) {
			filters.latitude = parseFloat(latitude as string);
			filters.longitude = parseFloat(longitude as string);
			filters.radius = radius ? parseFloat(radius as string) : 10;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const result = await RestaurantService.getAllRestaurants(
			page,
			limit,
			filters,
			userLanguage,
			sortBy as string,
			sortOrder as 'asc' | 'desc',
		);

		const totalPages = Math.ceil(result.total / limit);

		res.json({
			success: true,
			data: {
				data: result.restaurants,
				pagination: {
					page,
					limit,
					total: result.total,
					totalPages,
					hasNext: page < totalPages,
					hasPrev: page > 1,
				},
			},
		});
	},
);

/**
 * Get restaurant by ID with full details
 */
export const getRestaurantById: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<RestaurantWithDetails>>) => {
		const { id } = req.params;
		const userLanguage = req.user?.language || 'es_ES';

		const restaurant = await RestaurantService.getRestaurantWithDetails(
			id,
			userLanguage,
		);

		if (!restaurant) {
			res.status(404).json({
				success: false,
				error: 'Restaurant not found',
			});
			return;
		}

		res.json({
			success: true,
			data: restaurant,
		});
	},
);

/**
 * Update restaurant (owner only)
 */
export const updateRestaurant: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Restaurant>>) => {
		const { id } = req.params;
		const { isValid, data, errors } = validateData(
			updateRestaurantSchema,
			req.body,
		);

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

		// Check ownership
		const restaurant = await RestaurantService.getRestaurantById(id);
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
				error: 'Not authorized to update this restaurant',
			});
			return;
		}

		const updatedRestaurant = await RestaurantService.updateRestaurant(
			id,
			data!,
		);

		res.json({
			success: true,
			data: updatedRestaurant,
			message: 'Restaurant updated successfully',
		});
	},
);

/**
 * Delete restaurant (owner only)
 */
export const deleteRestaurant: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse>) => {
		const { id } = req.params;

		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		// Check ownership
		const restaurant = await RestaurantService.getRestaurantById(id);
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
				error: 'Not authorized to delete this restaurant',
			});
			return;
		}

		await RestaurantService.deleteRestaurant(id);

		res.json({
			success: true,
			message: 'Restaurant deleted successfully',
		});
	},
);

/**
 * Search restaurants
 */
export const searchRestaurants: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<RestaurantWithDetails[]>>) => {
		const { q: query, limit: limitStr } = req.query;

		if (!query || typeof query !== 'string' || query.length < 2) {
			res.status(400).json({
				success: false,
				error: 'Search query must be at least 2 characters long',
			});
			return;
		}

		const limit = limitStr ? parseInt(limitStr as string, 10) : 20;
		const userLanguage = req.user?.language || 'es_ES';

		const restaurants = await RestaurantService.searchRestaurants(
			query,
			userLanguage,
			limit,
		);

		res.json({
			success: true,
			data: restaurants,
		});
	},
);

/**
 * Get restaurants owned by current user
 */
export const getMyRestaurants: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<RestaurantWithDetails[]>>) => {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		const userLanguage = req.user.language;
		const restaurants = await RestaurantService.getRestaurantsByOwner(
			req.user.userId,
			userLanguage,
		);

		res.json({
			success: true,
			data: restaurants,
		});
	},
);

/**
 * Update restaurant rating (internal use)
 */
export const updateRestaurantRating: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse>) => {
		const { id } = req.params;

		await RestaurantService.updateRestaurantRating(id);

		res.json({
			success: true,
			message: 'Restaurant rating updated successfully',
		});
	},
);
