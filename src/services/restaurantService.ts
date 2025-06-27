import { supabase } from '@/database/client';
import {
	Restaurant,
	CreateRestaurantInput,
	UpdateRestaurantInput,
	RestaurantWithDetails,
	LocalizedCuisine,
	LocalizedAddress,
	LocalizedMenu,
	LocalizedReview,
} from '@/types/entities';
import { Language } from '@/types/common';
import { CuisineService } from './cuisineService';
import { AddressService } from './addressService';
import { MenuService } from './menuService';
import { AppError } from '@/middleware/errorHandler';

export class RestaurantService {
	/**
	 * Create a new restaurant
	 */
	static async createRestaurant(
		restaurantData: CreateRestaurantInput & { owner_id: string },
	): Promise<Restaurant> {
		const { data, error } = await supabase
			.from('restaurants')
			.insert(restaurantData)
			.select()
			.single();

		if (error) {
			if (error.code === '23503') {
				// Foreign key constraint violation
				if (error.message.includes('cuisine_id')) {
					throw new AppError('Invalid cuisine ID', 400);
				}
				if (error.message.includes('address_id')) {
					throw new AppError('Invalid address ID', 400);
				}
				if (error.message.includes('owner_id')) {
					throw new AppError('Invalid owner ID', 400);
				}
			}
			throw new AppError('Failed to create restaurant', 500);
		}

		return data as Restaurant;
	}

	/**
	 * Get restaurant by ID (raw data)
	 */
	static async getRestaurantById(
		restaurantId: string,
	): Promise<Restaurant | null> {
		const { data, error } = await supabase
			.from('restaurants')
			.select('*')
			.eq('id', restaurantId)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				return null;
			}
			throw new AppError('Failed to fetch restaurant', 500);
		}

		return data as Restaurant;
	}

	/**
	 * Get restaurant with full details (localized)
	 */
	static async getRestaurantWithDetails(
		restaurantId: string,
		userLanguage: Language,
	): Promise<RestaurantWithDetails | null> {
		const restaurant = await this.getRestaurantById(restaurantId);
		if (!restaurant) {
			return null;
		}

		// Get related data
		const [cuisine, address, menus] = await Promise.all([
			CuisineService.getLocalizedCuisineById(
				restaurant.cuisine_id,
				userLanguage,
			),
			AddressService.getLocalizedAddressById(
				restaurant.address_id,
				userLanguage,
			),
			MenuService.getMenusByRestaurant(restaurantId, userLanguage),
		]);

		if (!cuisine || !address) {
			throw new AppError('Restaurant data incomplete', 500);
		}

		// Get recent reviews (first 5)
		const { data: reviewsData, error: reviewsError } = await supabase
			.from('reviews')
			.select(
				`
				*,
				users:user_id (id, username, name, photo)
			`,
			)
			.eq('restaurant_id', restaurantId)
			.order('created_at', { ascending: false })
			.limit(5);

		let reviews: LocalizedReview[] = [];
		if (!reviewsError && reviewsData) {
			reviews = reviewsData.map((review: any) => ({
				id: review.id,
				user_id: review.user_id,
				user_name: review.users.name,
				user_avatar: review.users.photo,
				restaurant_id: review.restaurant_id,
				restaurant_name: restaurant.name,
				restaurant_image: restaurant.main_image,
				rating: review.rating,
				comment: this.getLocalizedText(review.comment, userLanguage),
				photos: review.photos || [],
				restaurant_response: review.restaurant_response_message
					? {
							message: this.getLocalizedText(
								review.restaurant_response_message,
								userLanguage,
							),
							date: review.restaurant_response_date,
					  }
					: undefined,
				date: review.created_at,
			}));
		}

		return {
			...restaurant,
			cuisine,
			address,
			menus,
			reviews,
		};
	}

	/**
	 * Get all restaurants with filters and pagination
	 */
	static async getAllRestaurants(
		page: number = 1,
		limit: number = 20,
		filters: any = {},
		userLanguage: Language,
		sortBy: string = 'created_at',
		sortOrder: 'asc' | 'desc' = 'desc',
	): Promise<{ restaurants: RestaurantWithDetails[]; total: number }> {
		let query = supabase
			.from('restaurants')
			.select(
				`
				*,
				cuisines!inner(id, name, image),
				addresses!inner(id, street, number, additional_information, postal_code, city, country, coordinates, formatted_address)
			`,
				{ count: 'exact' },
			)
			.eq('is_active', true);

		// Apply filters
		if (filters.cuisine_id) {
			query = query.eq('cuisine_id', filters.cuisine_id);
		}

		if (filters.min_price) {
			query = query.gte('minimum_price', filters.min_price);
		}

		if (filters.max_price) {
			query = query.lte('minimum_price', filters.max_price);
		}

		if (filters.min_rating) {
			query = query.gte('rating', filters.min_rating);
		}

		if (filters.tags && filters.tags.length > 0) {
			query = query.contains('tags', filters.tags);
		}

		if (filters.search) {
			query = query.ilike('name', `%${filters.search}%`);
		}

		// Apply sorting
		const validSortFields = ['created_at', 'rating', 'minimum_price', 'name'];
		const sortField = validSortFields.includes(sortBy) ? sortBy : 'created_at';
		query = query.order(sortField, { ascending: sortOrder === 'asc' });

		// Apply pagination
		const offset = (page - 1) * limit;
		query = query.range(offset, offset + limit - 1);

		const { data, error, count } = await query;

		if (error) {
			throw new AppError('Failed to fetch restaurants', 500);
		}

		const restaurants: RestaurantWithDetails[] = await Promise.all(
			(data || []).map(async (restaurant: any) => {
				const cuisine: LocalizedCuisine = {
					id: restaurant.cuisines.id,
					name: this.getLocalizedText(restaurant.cuisines.name, userLanguage),
					image: restaurant.cuisines.image,
				};

				const address: LocalizedAddress = {
					id: restaurant.addresses.id,
					street: this.getLocalizedText(
						restaurant.addresses.street,
						userLanguage,
					),
					number: restaurant.addresses.number,
					additional_information: restaurant.addresses.additional_information,
					postal_code: restaurant.addresses.postal_code,
					city: this.getLocalizedText(restaurant.addresses.city, userLanguage),
					country: this.getLocalizedText(
						restaurant.addresses.country,
						userLanguage,
					),
					coordinates: restaurant.addresses.coordinates,
					formatted_address: restaurant.addresses.formatted_address,
				};

				// Calculate distance if coordinates provided
				let distance = 0;
				if (filters.latitude && filters.longitude) {
					distance = AddressService.calculateDistance(
						{
							...address,
							coordinates: {
								latitude: filters.latitude,
								longitude: filters.longitude,
							},
						},
						address,
					);
				}

				return {
					...restaurant,
					distance,
					cuisine,
					address,
					menus: [], // Loaded separately when needed
					reviews: [], // Loaded separately when needed
				};
			}),
		);

		// Filter by distance if radius provided
		let filteredRestaurants = restaurants;
		if (filters.radius && filters.latitude && filters.longitude) {
			filteredRestaurants = restaurants.filter(
				(restaurant) => restaurant.distance <= filters.radius,
			);
		}

		return {
			restaurants: filteredRestaurants,
			total: count || 0,
		};
	}

	/**
	 * Update restaurant
	 */
	static async updateRestaurant(
		restaurantId: string,
		updateData: UpdateRestaurantInput,
	): Promise<Restaurant> {
		const { data, error } = await supabase
			.from('restaurants')
			.update(updateData)
			.eq('id', restaurantId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				throw new AppError('Restaurant not found', 404);
			}
			if (error.code === '23503') {
				if (error.message.includes('cuisine_id')) {
					throw new AppError('Invalid cuisine ID', 400);
				}
				if (error.message.includes('address_id')) {
					throw new AppError('Invalid address ID', 400);
				}
			}
			throw new AppError('Failed to update restaurant', 500);
		}

		return data as Restaurant;
	}

	/**
	 * Delete restaurant
	 */
	static async deleteRestaurant(restaurantId: string): Promise<void> {
		// First, delete all related data
		await Promise.all([
			// Delete reviews
			supabase.from('reviews').delete().eq('restaurant_id', restaurantId),
			// Delete dishes through menus
			supabase
				.from('dishes')
				.delete()
				.in(
					'menu_id',
					supabase.from('menus').select('id').eq('restaurant_id', restaurantId),
				),
			// Delete menus
			supabase.from('menus').delete().eq('restaurant_id', restaurantId),
		]);

		// Then delete the restaurant
		const { error } = await supabase
			.from('restaurants')
			.delete()
			.eq('id', restaurantId);

		if (error) {
			throw new AppError('Failed to delete restaurant', 500);
		}
	}

	/**
	 * Search restaurants
	 */
	static async searchRestaurants(
		query: string,
		userLanguage: Language,
		limit: number = 20,
	): Promise<RestaurantWithDetails[]> {
		const { data, error } = await supabase
			.from('restaurants')
			.select(
				`
				*,
				cuisines!inner(id, name, image),
				addresses!inner(id, street, number, additional_information, postal_code, city, country, coordinates, formatted_address)
			`,
			)
			.eq('is_active', true)
			.or(`name.ilike.%${query}%, cuisines.name->>es_ES.ilike.%${query}%`)
			.limit(limit);

		if (error) {
			throw new AppError('Failed to search restaurants', 500);
		}

		return Promise.all(
			(data || []).map(async (restaurant: any) => {
				const cuisine: LocalizedCuisine = {
					id: restaurant.cuisines.id,
					name: this.getLocalizedText(restaurant.cuisines.name, userLanguage),
					image: restaurant.cuisines.image,
				};

				const address: LocalizedAddress = {
					id: restaurant.addresses.id,
					street: this.getLocalizedText(
						restaurant.addresses.street,
						userLanguage,
					),
					number: restaurant.addresses.number,
					additional_information: restaurant.addresses.additional_information,
					postal_code: restaurant.addresses.postal_code,
					city: this.getLocalizedText(restaurant.addresses.city, userLanguage),
					country: this.getLocalizedText(
						restaurant.addresses.country,
						userLanguage,
					),
					coordinates: restaurant.addresses.coordinates,
					formatted_address: restaurant.addresses.formatted_address,
				};

				return {
					...restaurant,
					distance: 0,
					cuisine,
					address,
					menus: [],
					reviews: [],
				};
			}),
		);
	}

	/**
	 * Get restaurants by owner
	 */
	static async getRestaurantsByOwner(
		ownerId: string,
		userLanguage: Language,
	): Promise<RestaurantWithDetails[]> {
		const { data, error } = await supabase
			.from('restaurants')
			.select(
				`
				*,
				cuisines!inner(id, name, image),
				addresses!inner(id, street, number, additional_information, postal_code, city, country, coordinates, formatted_address)
			`,
			)
			.eq('owner_id', ownerId)
			.order('created_at', { ascending: false });

		if (error) {
			throw new AppError('Failed to fetch user restaurants', 500);
		}

		return Promise.all(
			(data || []).map(async (restaurant: any) => {
				const cuisine: LocalizedCuisine = {
					id: restaurant.cuisines.id,
					name: this.getLocalizedText(restaurant.cuisines.name, userLanguage),
					image: restaurant.cuisines.image,
				};

				const address: LocalizedAddress = {
					id: restaurant.addresses.id,
					street: this.getLocalizedText(
						restaurant.addresses.street,
						userLanguage,
					),
					number: restaurant.addresses.number,
					additional_information: restaurant.addresses.additional_information,
					postal_code: restaurant.addresses.postal_code,
					city: this.getLocalizedText(restaurant.addresses.city, userLanguage),
					country: this.getLocalizedText(
						restaurant.addresses.country,
						userLanguage,
					),
					coordinates: restaurant.addresses.coordinates,
					formatted_address: restaurant.addresses.formatted_address,
				};

				// Get menus for owned restaurants
				const menus = await MenuService.getMenusByRestaurant(
					restaurant.id,
					userLanguage,
				);

				return {
					...restaurant,
					distance: 0,
					cuisine,
					address,
					menus,
					reviews: [],
				};
			}),
		);
	}

	/**
	 * Update restaurant rating based on reviews
	 */
	static async updateRestaurantRating(restaurantId: string): Promise<void> {
		const { data, error } = await supabase
			.from('reviews')
			.select('rating')
			.eq('restaurant_id', restaurantId);

		if (error) {
			throw new AppError('Failed to calculate restaurant rating', 500);
		}

		let averageRating = null;
		if (data && data.length > 0) {
			const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
			averageRating = Math.round((totalRating / data.length) * 10) / 10;
		}

		const { error: updateError } = await supabase
			.from('restaurants')
			.update({ rating: averageRating })
			.eq('id', restaurantId);

		if (updateError) {
			throw new AppError('Failed to update restaurant rating', 500);
		}
	}

	/**
	 * Helper method to get localized text
	 */
	private static getLocalizedText(
		translatedText: any,
		userLanguage: Language,
		fallbackLanguage: Language = 'es_ES',
	): string {
		if (!translatedText) return '';

		let text = translatedText[userLanguage];

		if (!text && fallbackLanguage !== userLanguage) {
			text = translatedText[fallbackLanguage];
		}

		if (!text) {
			text =
				translatedText.es_ES ||
				translatedText.en_US ||
				translatedText.ca_ES ||
				translatedText.fr_FR ||
				'';
		}

		return text;
	}
}
