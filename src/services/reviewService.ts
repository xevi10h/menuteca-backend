import { supabase } from '@/database/client';
import {
	Review,
	CreateReviewInput,
	UpdateReviewInput,
	LocalizedReview,
} from '@/types/entities';
import { Language } from '@/types/common';
import {
	createUserTranslatedText,
	mergeTranslatedText,
	getLocalizedText,
} from '@/utils/localization';
import { AppError } from '@/middleware/errorHandler';

export class ReviewService {
	/**
	 * Create a new review
	 */
	static async createReview(
		userId: string,
		reviewData: CreateReviewInput,
		userLanguage: Language,
	): Promise<Review> {
		// Create translated text for comment
		const commentTranslated = createUserTranslatedText(
			reviewData.comment,
			userLanguage,
		);

		const { data, error } = await supabase
			.from('reviews')
			.insert({
				user_id: userId,
				restaurant_id: reviewData.restaurant_id,
				rating: reviewData.rating,
				comment: commentTranslated,
				photos: reviewData.photos || [],
			})
			.select()
			.single();

		if (error) {
			if (error.code === '23503') {
				if (error.message.includes('restaurant_id')) {
					throw new AppError('Invalid restaurant ID', 400);
				}
				if (error.message.includes('user_id')) {
					throw new AppError('Invalid user ID', 400);
				}
			}
			if (error.code === '23505') {
				throw new AppError('You have already reviewed this restaurant', 409);
			}
			throw new AppError('Failed to create review', 500);
		}

		return data as Review;
	}

	/**
	 * Get review by ID (raw data)
	 */
	static async getReviewById(reviewId: string): Promise<Review | null> {
		const { data, error } = await supabase
			.from('reviews')
			.select('*')
			.eq('id', reviewId)
			.is('deleted_at', null)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				return null;
			}
			throw new AppError('Failed to fetch review', 500);
		}

		return data as Review;
	}

	/**
	 * Get localized review by ID
	 */
	static async getLocalizedReviewById(
		reviewId: string,
		userLanguage: Language,
	): Promise<LocalizedReview | null> {
		const { data, error } = await supabase
			.from('reviews')
			.select(
				`
				*,
				users:user_id (id, username, name, photo),
				restaurants:restaurant_id (id, name, main_image)
			`,
			)
			.eq('id', reviewId)
			.is('deleted_at', null)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				return null;
			}
			throw new AppError('Failed to fetch review', 500);
		}

		return this.localizeReview(data, userLanguage);
	}

	/**
	 * Get all reviews for a restaurant
	 */
	static async getRestaurantReviews(
		restaurantId: string,
		page: number = 1,
		limit: number = 20,
		userLanguage: Language,
		filters: any = {},
		sortBy: string = 'created_at',
		sortOrder: 'asc' | 'desc' = 'desc',
	): Promise<{ reviews: LocalizedReview[]; total: number }> {
		let query = supabase
			.from('reviews')
			.select(
				`
				*,
				users:user_id (id, username, name, photo),
				restaurants:restaurant_id (id, name, main_image)
			`,
				{ count: 'exact' },
			)
			.eq('restaurant_id', restaurantId)
			.is('deleted_at', null);

		// Apply filters
		if (filters.min_rating) {
			query = query.gte('rating', filters.min_rating);
		}

		if (filters.max_rating) {
			query = query.lte('rating', filters.max_rating);
		}

		// Apply sorting
		const validSortFields = ['created_at', 'rating', 'updated_at'];
		const sortField = validSortFields.includes(sortBy) ? sortBy : 'created_at';
		query = query.order(sortField, { ascending: sortOrder === 'asc' });

		// Apply pagination
		const offset = (page - 1) * limit;
		query = query.range(offset, offset + limit - 1);

		const { data, error, count } = await query;

		if (error) {
			throw new AppError('Failed to fetch restaurant reviews', 500);
		}

		const reviews = (data || []).map((review: any) =>
			this.localizeReview(review, userLanguage),
		);

		return {
			reviews,
			total: count || 0,
		};
	}

	/**
	 * Get all reviews by a user
	 */
	static async getUserReviews(
		userId: string,
		page: number = 1,
		limit: number = 20,
		userLanguage: Language,
		sortBy: string = 'created_at',
		sortOrder: 'asc' | 'desc' = 'desc',
	): Promise<{ reviews: LocalizedReview[]; total: number }> {
		let query = supabase
			.from('reviews')
			.select(
				`
				*,
				users:user_id (id, username, name, photo),
				restaurants:restaurant_id (id, name, main_image)
			`,
				{ count: 'exact' },
			)
			.eq('user_id', userId)
			.is('deleted_at', null);

		// Apply sorting
		const validSortFields = ['created_at', 'rating', 'updated_at'];
		const sortField = validSortFields.includes(sortBy) ? sortBy : 'created_at';
		query = query.order(sortField, { ascending: sortOrder === 'asc' });

		// Apply pagination
		const offset = (page - 1) * limit;
		query = query.range(offset, offset + limit - 1);

		const { data, error, count } = await query;

		if (error) {
			throw new AppError('Failed to fetch user reviews', 500);
		}

		const reviews = (data || []).map((review: any) =>
			this.localizeReview(review, userLanguage),
		);

		return {
			reviews,
			total: count || 0,
		};
	}

	/**
	 * Check if user has reviewed a restaurant
	 */
	static async getUserReviewForRestaurant(
		userId: string,
		restaurantId: string,
	): Promise<Review | null> {
		const { data, error } = await supabase
			.from('reviews')
			.select('*')
			.eq('user_id', userId)
			.eq('restaurant_id', restaurantId)
			.is('deleted_at', null)
			.single();

		if (error && error.code !== 'PGRST116') {
			throw new AppError('Failed to check user review', 500);
		}

		return (data as Review) || null;
	}

	/**
	 * Update review
	 */
	static async updateReview(
		reviewId: string,
		updateData: UpdateReviewInput,
		userLanguage: Language,
	): Promise<Review> {
		// Handle comment translation update
		let finalUpdateData: any = { ...updateData };

		if (updateData.comment) {
			const existingReview = await this.getReviewById(reviewId);
			if (existingReview) {
				finalUpdateData.comment = mergeTranslatedText(
					existingReview.comment,
					updateData.comment,
					userLanguage,
				);
			} else {
				finalUpdateData.comment = createUserTranslatedText(
					updateData.comment,
					userLanguage,
				);
			}
		}

		const { data, error } = await supabase
			.from('reviews')
			.update(finalUpdateData)
			.eq('id', reviewId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				throw new AppError('Review not found', 404);
			}
			throw new AppError('Failed to update review', 500);
		}

		return data as Review;
	}

	/**
	 * Delete review
	 */
	static async deleteReview(reviewId: string): Promise<void> {
		const { error } = await supabase
			.from('reviews')
			.delete()
			.eq('id', reviewId);

		if (error) {
			throw new AppError('Failed to delete review', 500);
		}
	}

	/**
	 * Soft delete review
	 */
	static async softDeleteReview(reviewId: string): Promise<void> {
		const { error } = await supabase
			.from('reviews')
			.update({ deleted_at: new Date().toISOString() })
			.eq('id', reviewId)
			.is('deleted_at', null);

		if (error) {
			throw new AppError('Failed to delete review', 500);
		}
	}

	/**
	 * Add restaurant response to review
	 */
	static async addRestaurantResponse(
		reviewId: string,
		message: string,
		userLanguage: Language,
	): Promise<Review> {
		const responseTranslated = createUserTranslatedText(message, userLanguage);

		const { data, error } = await supabase
			.from('reviews')
			.update({
				restaurant_response_message: responseTranslated,
				restaurant_response_date: new Date().toISOString(),
			})
			.eq('id', reviewId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				throw new AppError('Review not found', 404);
			}
			throw new AppError('Failed to add restaurant response', 500);
		}

		return data as Review;
	}

	/**
	 * Get review statistics for a restaurant
	 */
	static async getReviewStats(restaurantId: string): Promise<{
		total: number;
		averageRating: number;
		ratingDistribution: Record<string, number>;
		recentReviews: number;
		responseRate: number;
	}> {
		const { data, error } = await supabase
			.from('reviews')
			.select('rating, created_at, restaurant_response_message')
			.eq('restaurant_id', restaurantId)
			.is('deleted_at', null);

		if (error) {
			throw new AppError('Failed to get review statistics', 500);
		}

		const total = data?.length || 0;

		if (total === 0) {
			return {
				total: 0,
				averageRating: 0,
				ratingDistribution: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
				recentReviews: 0,
				responseRate: 0,
			};
		}

		// Calculate average rating
		const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
		const averageRating = Math.round((totalRating / total) * 10) / 10;

		// Calculate rating distribution
		const ratingDistribution: Record<string, number> = {
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
		};
		data.forEach((review) => {
			const ratingKey = Math.floor(review.rating).toString();
			if (ratingDistribution[ratingKey] !== undefined) {
				ratingDistribution[ratingKey]++;
			}
		});

		// Calculate recent reviews (last 30 days)
		const thirtyDaysAgo = new Date();
		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
		const recentReviews = data.filter(
			(review) => new Date(review.created_at) > thirtyDaysAgo,
		).length;

		// Calculate response rate
		const reviewsWithResponse = data.filter(
			(review) => review.restaurant_response_message,
		).length;
		const responseRate = Math.round((reviewsWithResponse / total) * 100);

		return {
			total,
			averageRating,
			ratingDistribution,
			recentReviews,
			responseRate,
		};
	}

	/**
	 * Search reviews by comment content
	 */
	static async searchReviews(
		query: string,
		userLanguage: Language,
		filters: any = {},
	): Promise<LocalizedReview[]> {
		let dbQuery = supabase.from('reviews').select(`
				*,
				users:user_id (id, username, name, photo),
				restaurants:restaurant_id (id, name, main_image)
			`);

		// Apply filters
		if (filters.restaurant_id) {
			dbQuery = dbQuery.eq('restaurant_id', filters.restaurant_id);
		}

		if (filters.min_rating) {
			dbQuery = dbQuery.gte('rating', filters.min_rating);
		}

		if (filters.max_rating) {
			dbQuery = dbQuery.lte('rating', filters.max_rating);
		}

		const { data, error } = await dbQuery.order('created_at', {
			ascending: false,
		});

		if (error) {
			throw new AppError('Failed to search reviews', 500);
		}

		const searchTerm = query.toLowerCase();

		// Filter reviews by comment content in user's language
		const filteredReviews = (data || []).filter((review: any) => {
			const localizedComment = getLocalizedText(
				review.comment,
				userLanguage,
			).toLowerCase();
			return localizedComment.includes(searchTerm);
		});

		return filteredReviews.map((review: any) =>
			this.localizeReview(review, userLanguage),
		);
	}

	/**
	 * Get recent reviews (last 30 days)
	 */
	static async getRecentReviews(
		limit: number = 10,
		userLanguage: Language,
	): Promise<LocalizedReview[]> {
		const thirtyDaysAgo = new Date();
		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

		const { data, error } = await supabase
			.from('reviews')
			.select(
				`
				*,
				users:user_id (id, username, name, photo),
				restaurants:restaurant_id (id, name, main_image)
			`,
			)
			.is('deleted_at', null)
			.gte('created_at', thirtyDaysAgo.toISOString())
			.order('created_at', { ascending: false })
			.limit(limit);

		if (error) {
			throw new AppError('Failed to fetch recent reviews', 500);
		}

		return (data || []).map((review: any) =>
			this.localizeReview(review, userLanguage),
		);
	}

	/**
	 * Get top rated reviews
	 */
	static async getTopRatedReviews(
		limit: number = 10,
		minRating: number = 4.0,
		userLanguage: Language,
	): Promise<LocalizedReview[]> {
		const { data, error } = await supabase
			.from('reviews')
			.select(
				`
				*,
				users:user_id (id, username, name, photo),
				restaurants:restaurant_id (id, name, main_image)
			`,
			)
			.is('deleted_at', null)
			.gte('rating', minRating)
			.order('rating', { ascending: false })
			.order('created_at', { ascending: false })
			.limit(limit);

		if (error) {
			throw new AppError('Failed to fetch top rated reviews', 500);
		}

		return (data || []).map((review: any) =>
			this.localizeReview(review, userLanguage),
		);
	}

	/**
	 * Remove restaurant response
	 */
	static async removeRestaurantResponse(reviewId: string): Promise<Review> {
		const { data, error } = await supabase
			.from('reviews')
			.update({
				restaurant_response_message: null,
				restaurant_response_date: null,
			})
			.eq('id', reviewId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				throw new AppError('Review not found', 404);
			}
			throw new AppError('Failed to remove restaurant response', 500);
		}

		return data as Review;
	}

	/**
	 * Convert review to localized version
	 */
	private static localizeReview(
		review: any,
		userLanguage: Language,
	): LocalizedReview {
		return {
			id: review.id,
			user_id: review.user_id,
			user_name: review.users?.name || 'Unknown User',
			user_avatar: review.users?.photo || '',
			restaurant_id: review.restaurant_id,
			restaurant_name: review.restaurants?.name || 'Unknown Restaurant',
			restaurant_image: review.restaurants?.main_image || '',
			rating: review.rating,
			comment: getLocalizedText(review.comment, userLanguage),
			photos: review.photos || [],
			restaurant_response: review.restaurant_response_message
				? {
						message: getLocalizedText(
							review.restaurant_response_message,
							userLanguage,
						),
						date: review.restaurant_response_date,
				  }
				: undefined,
			date: review.created_at,
		};
	}
}
