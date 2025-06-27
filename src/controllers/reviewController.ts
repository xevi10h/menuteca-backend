import { Request, Response, RequestHandler } from 'express';
import { ReviewService } from '@/services/reviewService';
import { RestaurantService } from '@/services/restaurantService';
import {
	validateData,
	createReviewSchema,
	updateReviewSchema,
	createRestaurantResponseSchema,
} from '@/utils/validation';
import { ApiResponse, PaginatedResponse } from '@/types/common';
import { Review, LocalizedReview } from '@/types/entities';
import { asyncHandler } from '@/middleware/errorHandler';

/**
 * Create a new review
 */
export const createReview: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Review>>) => {
		const { restaurantId } = req.params;
		const { isValid, data, errors } = validateData(createReviewSchema, {
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

		// Check if restaurant exists
		const restaurant = await RestaurantService.getRestaurantById(restaurantId);
		if (!restaurant) {
			res.status(404).json({
				success: false,
				error: 'Restaurant not found',
			});
			return;
		}

		// Check if user has already reviewed this restaurant
		const existingReview = await ReviewService.getUserReviewForRestaurant(
			req.user.userId,
			restaurantId,
		);

		if (existingReview) {
			res.status(409).json({
				success: false,
				error: 'You have already reviewed this restaurant',
			});
			return;
		}

		const review = await ReviewService.createReview(
			req.user.userId,
			data!,
			req.user.language,
		);

		// Update restaurant rating
		await RestaurantService.updateRestaurantRating(restaurantId);

		res.status(201).json({
			success: true,
			data: review,
			message: 'Review created successfully',
		});
	},
);

/**
 * Get all reviews for a restaurant
 */
export const getRestaurantReviews: RequestHandler = asyncHandler(
	async (
		req: Request,
		res: Response<ApiResponse<PaginatedResponse<LocalizedReview>>>,
	) => {
		const { restaurantId } = req.params;
		const {
			page: pageStr,
			limit: limitStr,
			sortBy,
			sortOrder,
			min_rating,
			max_rating,
		} = req.query;

		const page = parseInt(pageStr as string) || 1;
		const limit = parseInt(limitStr as string) || 20;

		const filters: any = {};
		if (min_rating) filters.min_rating = parseFloat(min_rating as string);
		if (max_rating) filters.max_rating = parseFloat(max_rating as string);

		const userLanguage = req.user?.language || 'es_ES';

		const result = await ReviewService.getRestaurantReviews(
			restaurantId,
			page,
			limit,
			userLanguage,
			filters,
			sortBy as string,
			sortOrder as 'asc' | 'desc',
		);

		const totalPages = Math.ceil(result.total / limit);

		res.json({
			success: true,
			data: {
				data: result.reviews,
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
 * Get current user's reviews
 */
export const getMyReviews: RequestHandler = asyncHandler(
	async (
		req: Request,
		res: Response<ApiResponse<PaginatedResponse<LocalizedReview>>>,
	) => {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		const { page: pageStr, limit: limitStr, sortBy, sortOrder } = req.query;

		const page = parseInt(pageStr as string) || 1;
		const limit = parseInt(limitStr as string) || 20;

		const userLanguage = req.user.language;

		const result = await ReviewService.getUserReviews(
			req.user.userId,
			page,
			limit,
			userLanguage,
			sortBy as string,
			sortOrder as 'asc' | 'desc',
		);

		const totalPages = Math.ceil(result.total / limit);

		res.json({
			success: true,
			data: {
				data: result.reviews,
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
 * Update review (author only)
 */
export const updateReview: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Review>>) => {
		const { id } = req.params;
		const { isValid, data, errors } = validateData(
			updateReviewSchema,
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
		const review = await ReviewService.getReviewById(id);
		if (!review) {
			res.status(404).json({
				success: false,
				error: 'Review not found',
			});
			return;
		}

		if (review.user_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to update this review',
			});
			return;
		}

		const updatedReview = await ReviewService.updateReview(
			id,
			data!,
			req.user.language,
		);

		// Update restaurant rating if rating changed
		if (data!.rating !== undefined) {
			await RestaurantService.updateRestaurantRating(review.restaurant_id);
		}

		res.json({
			success: true,
			data: updatedReview,
			message: 'Review updated successfully',
		});
	},
);

/**
 * Delete review (author only)
 */
export const deleteReview: RequestHandler = asyncHandler(
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
		const review = await ReviewService.getReviewById(id);
		if (!review) {
			res.status(404).json({
				success: false,
				error: 'Review not found',
			});
			return;
		}

		if (review.user_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to delete this review',
			});
			return;
		}

		const restaurantId = review.restaurant_id;
		await ReviewService.deleteReview(id);

		// Update restaurant rating
		await RestaurantService.updateRestaurantRating(restaurantId);

		res.json({
			success: true,
			message: 'Review deleted successfully',
		});
	},
);

/**
 * Add restaurant response to review (restaurant owner only)
 */
export const addRestaurantResponse: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Review>>) => {
		const { id } = req.params;
		const { isValid, data, errors } = validateData(
			createRestaurantResponseSchema,
			{
				...req.body,
				review_id: id,
			},
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

		// Check if review exists and get restaurant ownership
		const review = await ReviewService.getReviewById(id);
		if (!review) {
			res.status(404).json({
				success: false,
				error: 'Review not found',
			});
			return;
		}

		const restaurant = await RestaurantService.getRestaurantById(
			review.restaurant_id,
		);
		if (!restaurant || restaurant.owner_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to respond to this review',
			});
			return;
		}

		const updatedReview = await ReviewService.addRestaurantResponse(
			id,
			data!.message,
			req.user.language,
		);

		res.json({
			success: true,
			data: updatedReview,
			message: 'Restaurant response added successfully',
		});
	},
);

/**
 * Get review by ID
 */
export const getReviewById: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedReview>>) => {
		const { id } = req.params;
		const userLanguage = req.user?.language || 'es_ES';

		const review = await ReviewService.getLocalizedReviewById(id, userLanguage);

		if (!review) {
			res.status(404).json({
				success: false,
				error: 'Review not found',
			});
			return;
		}

		res.json({
			success: true,
			data: review,
		});
	},
);

/**
 * Get reviews statistics for a restaurant
 */
export const getReviewStats: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse>) => {
		const { restaurantId } = req.params;

		const stats = await ReviewService.getReviewStats(restaurantId);

		res.json({
			success: true,
			data: stats,
		});
	},
);

/**
 * Search reviews
 */
export const searchReviews: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedReview[]>>) => {
		const { q: query, min_rating, max_rating, restaurant_id } = req.query;

		if (!query || typeof query !== 'string' || query.length < 2) {
			res.status(400).json({
				success: false,
				error: 'Search query must be at least 2 characters long',
			});
			return;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const filters: any = {};
		if (min_rating) filters.min_rating = parseFloat(min_rating as string);
		if (max_rating) filters.max_rating = parseFloat(max_rating as string);
		if (restaurant_id) filters.restaurant_id = restaurant_id;

		const reviews = await ReviewService.searchReviews(
			query,
			userLanguage,
			filters,
		);

		res.json({
			success: true,
			data: reviews,
		});
	},
);

/**
 * Get recent reviews
 */
export const getRecentReviews: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedReview[]>>) => {
		const { limit: limitStr } = req.query;
		const limit = limitStr ? parseInt(limitStr as string, 10) : 10;

		if (limit < 1 || limit > 50) {
			res.status(400).json({
				success: false,
				error: 'Limit must be between 1 and 50',
			});
			return;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const reviews = await ReviewService.getRecentReviews(limit, userLanguage);

		res.json({
			success: true,
			data: reviews,
		});
	},
);

/**
 * Get top rated reviews
 */
export const getTopRatedReviews: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<LocalizedReview[]>>) => {
		const { limit: limitStr, min_rating } = req.query;
		const limit = limitStr ? parseInt(limitStr as string, 10) : 10;
		const minRating = min_rating ? parseFloat(min_rating as string) : 4.0;

		if (limit < 1 || limit > 50) {
			res.status(400).json({
				success: false,
				error: 'Limit must be between 1 and 50',
			});
			return;
		}

		const userLanguage = req.user?.language || 'es_ES';

		const reviews = await ReviewService.getTopRatedReviews(
			limit,
			minRating,
			userLanguage,
		);

		res.json({
			success: true,
			data: reviews,
		});
	},
);

/**
 * Remove restaurant response (restaurant owner only)
 */
export const removeRestaurantResponse: RequestHandler = asyncHandler(
	async (req: Request, res: Response<ApiResponse<Review>>) => {
		const { id } = req.params;

		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		// Check if review exists and get restaurant ownership
		const review = await ReviewService.getReviewById(id);
		if (!review) {
			res.status(404).json({
				success: false,
				error: 'Review not found',
			});
			return;
		}

		const restaurant = await RestaurantService.getRestaurantById(
			review.restaurant_id,
		);
		if (!restaurant || restaurant.owner_id !== req.user.userId) {
			res.status(403).json({
				success: false,
				error: 'Not authorized to modify responses for this review',
			});
			return;
		}

		const updatedReview = await ReviewService.removeRestaurantResponse(id);

		res.json({
			success: true,
			data: updatedReview,
			message: 'Restaurant response removed successfully',
		});
	},
);
