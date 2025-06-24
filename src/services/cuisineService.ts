import { supabase } from '@/database/client';
import {
	Cuisine,
	CreateCuisineInput,
	UpdateCuisineInput,
	LocalizedCuisine,
} from '@/types/entities';
import { Language } from '@/types/common';
import { getLocalizedText } from '@/utils/localization';
import { AppError } from '@/middleware/errorHandler';

export class CuisineService {
	/**
	 * Create a new cuisine
	 */
	static async createCuisine(
		cuisineData: CreateCuisineInput,
	): Promise<Cuisine> {
		const { data, error } = await supabase
			.from('cuisines')
			.insert(cuisineData)
			.select()
			.single();

		if (error) {
			throw new AppError('Failed to create cuisine', 500);
		}

		return data as Cuisine;
	}

	/**
	 * Get cuisine by ID (raw data with all translations)
	 */
	static async getCuisineById(cuisineId: string): Promise<Cuisine | null> {
		const { data, error } = await supabase
			.from('cuisines')
			.select('*')
			.eq('id', cuisineId)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				return null;
			}
			throw new AppError('Failed to fetch cuisine', 500);
		}

		return data as Cuisine;
	}

	/**
	 * Get localized cuisine by ID
	 */
	static async getLocalizedCuisineById(
		cuisineId: string,
		userLanguage: Language,
	): Promise<LocalizedCuisine | null> {
		const cuisine = await this.getCuisineById(cuisineId);

		if (!cuisine) {
			return null;
		}

		return this.localizeCuisine(cuisine, userLanguage);
	}

	/**
	 * Get all cuisines (raw data)
	 */
	static async getAllCuisines(): Promise<Cuisine[]> {
		const { data, error } = await supabase
			.from('cuisines')
			.select('*')
			.order('created_at', { ascending: true });

		if (error) {
			throw new AppError('Failed to fetch cuisines', 500);
		}

		return data as Cuisine[];
	}

	/**
	 * Get all localized cuisines
	 */
	static async getAllLocalizedCuisines(
		userLanguage: Language,
	): Promise<LocalizedCuisine[]> {
		const cuisines = await this.getAllCuisines();
		return cuisines.map((cuisine) =>
			this.localizeCuisine(cuisine, userLanguage),
		);
	}

	/**
	 * Update cuisine
	 */
	static async updateCuisine(
		cuisineId: string,
		updateData: UpdateCuisineInput,
	): Promise<Cuisine> {
		const { data, error } = await supabase
			.from('cuisines')
			.update(updateData)
			.eq('id', cuisineId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				throw new AppError('Cuisine not found', 404);
			}
			throw new AppError('Failed to update cuisine', 500);
		}

		return data as Cuisine;
	}

	/**
	 * Delete cuisine
	 */
	static async deleteCuisine(cuisineId: string): Promise<void> {
		// Check if cuisine is being used by any restaurants
		const { data: restaurants, error: checkError } = await supabase
			.from('restaurants')
			.select('id')
			.eq('cuisine_id', cuisineId)
			.limit(1);

		if (checkError) {
			throw new AppError('Failed to check cuisine usage', 500);
		}

		if (restaurants && restaurants.length > 0) {
			throw new AppError(
				'Cannot delete cuisine that is being used by restaurants',
				400,
			);
		}

		const { error } = await supabase
			.from('cuisines')
			.delete()
			.eq('id', cuisineId);

		if (error) {
			throw new AppError('Failed to delete cuisine', 500);
		}
	}

	/**
	 * Search cuisines by name
	 */
	static async searchCuisines(
		query: string,
		userLanguage: Language,
	): Promise<LocalizedCuisine[]> {
		// Get all cuisines since we need to search in translated text
		const cuisines = await this.getAllCuisines();

		const searchTerm = query.toLowerCase();

		const filteredCuisines = cuisines.filter((cuisine) => {
			const localizedName = getLocalizedText(
				cuisine.name,
				userLanguage,
			).toLowerCase();
			return localizedName.includes(searchTerm);
		});

		return filteredCuisines.map((cuisine) =>
			this.localizeCuisine(cuisine, userLanguage),
		);
	}

	/**
	 * Convert cuisine to localized version
	 */
	private static localizeCuisine(
		cuisine: Cuisine,
		userLanguage: Language,
	): LocalizedCuisine {
		return {
			id: cuisine.id,
			name: getLocalizedText(cuisine.name, userLanguage),
			image: cuisine.image,
		};
	}

	/**
	 * Get cuisine statistics
	 */
	static async getCuisineStats(): Promise<{
		total: number;
		mostPopular: LocalizedCuisine | null;
	}> {
		// Get total count
		const { count, error: countError } = await supabase
			.from('cuisines')
			.select('*', { count: 'exact', head: true });

		if (countError) {
			throw new AppError('Failed to count cuisines', 500);
		}

		// Get most popular cuisine (most restaurants)
		const { data: popularData, error: popularError } = await supabase
			.from('cuisines')
			.select(
				`
        *,
        restaurants:restaurants(count)
      `,
			)
			.order('restaurants.count', { ascending: false })
			.limit(1)
			.single();

		if (popularError && popularError.code !== 'PGRST116') {
			throw new AppError('Failed to fetch cuisine statistics', 500);
		}

		let mostPopular: LocalizedCuisine | null = null;
		if (popularData) {
			mostPopular = this.localizeCuisine(popularData as Cuisine, 'es_ES');
		}

		return {
			total: count || 0,
			mostPopular,
		};
	}
}
