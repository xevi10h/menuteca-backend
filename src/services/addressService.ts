import { supabase } from '@/database/client';
import {
	Address,
	CreateAddressInput,
	UpdateAddressInput,
	LocalizedAddress,
} from '@/types/entities';
import { Language } from '@/types/common';
import { getLocalizedText } from '@/utils/localization';
import { AppError } from '@/middleware/errorHandler';

export class AddressService {
	/**
	 * Create a new address
	 */
	static async createAddress(
		addressData: CreateAddressInput,
	): Promise<Address> {
		const { data, error } = await supabase
			.from('addresses')
			.insert(addressData)
			.select()
			.single();

		if (error) {
			throw new AppError('Failed to create address', 500);
		}

		return data as Address;
	}

	/**
	 * Get address by ID (raw data with all translations)
	 */
	static async getAddressById(addressId: string): Promise<Address | null> {
		const { data, error } = await supabase
			.from('addresses')
			.select('*')
			.eq('id', addressId)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				return null;
			}
			throw new AppError('Failed to fetch address', 500);
		}

		return data as Address;
	}

	/**
	 * Get localized address by ID
	 */
	static async getLocalizedAddressById(
		addressId: string,
		userLanguage: Language,
	): Promise<LocalizedAddress | null> {
		const address = await this.getAddressById(addressId);

		if (!address) {
			return null;
		}

		return this.localizeAddress(address, userLanguage);
	}

	/**
	 * Update address
	 */
	static async updateAddress(
		addressId: string,
		updateData: UpdateAddressInput,
	): Promise<Address> {
		const { data, error } = await supabase
			.from('addresses')
			.update(updateData)
			.eq('id', addressId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				throw new AppError('Address not found', 404);
			}
			throw new AppError('Failed to update address', 500);
		}

		return data as Address;
	}

	/**
	 * Delete address
	 */
	static async deleteAddress(addressId: string): Promise<void> {
		// Check if address is being used by any restaurants
		const { data: restaurants, error: checkError } = await supabase
			.from('restaurants')
			.select('id')
			.eq('address_id', addressId)
			.limit(1);

		if (checkError) {
			throw new AppError('Failed to check address usage', 500);
		}

		if (restaurants && restaurants.length > 0) {
			throw new AppError(
				'Cannot delete address that is being used by restaurants',
				400,
			);
		}

		const { error } = await supabase
			.from('addresses')
			.delete()
			.eq('id', addressId);

		if (error) {
			throw new AppError('Failed to delete address', 500);
		}
	}

	/**
	 * Search addresses by city or street
	 */
	static async searchAddresses(
		query: string,
		userLanguage: Language,
		limit: number = 20,
	): Promise<LocalizedAddress[]> {
		// Get all addresses since we need to search in translated text
		const { data, error } = await supabase
			.from('addresses')
			.select('*')
			.limit(limit * 2); // Get more to account for filtering

		if (error) {
			throw new AppError('Failed to search addresses', 500);
		}

		const searchTerm = query.toLowerCase();

		const filteredAddresses = data
			.filter((address) => {
				const localizedStreet = getLocalizedText(
					address.street,
					userLanguage,
				).toLowerCase();
				const localizedCity = getLocalizedText(
					address.city,
					userLanguage,
				).toLowerCase();
				const localizedCountry = getLocalizedText(
					address.country,
					userLanguage,
				).toLowerCase();

				return (
					localizedStreet.includes(searchTerm) ||
					localizedCity.includes(searchTerm) ||
					localizedCountry.includes(searchTerm) ||
					(address.formatted_address &&
						address.formatted_address.toLowerCase().includes(searchTerm))
				);
			})
			.slice(0, limit);

		return filteredAddresses.map((address) =>
			this.localizeAddress(address as Address, userLanguage),
		);
	}

	/**
	 * Get addresses by coordinates (nearby)
	 */
	static async getAddressesByCoordinates(
		latitude: number,
		longitude: number,
		radiusKm: number = 10,
		userLanguage: Language,
		limit: number = 20,
	): Promise<LocalizedAddress[]> {
		// Using PostGIS for geographical queries
		const { data, error } = await supabase.rpc('get_addresses_within_radius', {
			center_lat: latitude,
			center_lng: longitude,
			radius_km: radiusKm,
			max_results: limit,
		});

		if (error) {
			// Fallback to simple query if PostGIS function doesn't exist
			const { data: fallbackData, error: fallbackError } = await supabase
				.from('addresses')
				.select('*')
				.limit(limit);

			if (fallbackError) {
				throw new AppError('Failed to fetch addresses', 500);
			}

			return fallbackData.map((address: Address) =>
				this.localizeAddress(address, userLanguage),
			);
		}

		return data.map((address: Address) =>
			this.localizeAddress(address, userLanguage),
		);
	}

	/**
	 * Convert address to localized version
	 */
	private static localizeAddress(
		address: Address,
		userLanguage: Language,
	): LocalizedAddress {
		return {
			id: address.id,
			street: getLocalizedText(address.street, userLanguage),
			number: address.number,
			additional_information: address.additional_information,
			postal_code: address.postal_code,
			city: getLocalizedText(address.city, userLanguage),
			country: getLocalizedText(address.country, userLanguage),
			coordinates: address.coordinates,
			formatted_address: address.formatted_address,
		};
	}

	/**
	 * Format address for display
	 */
	static formatAddress(address: LocalizedAddress): string {
		if (address.formatted_address) {
			return address.formatted_address;
		}

		const parts: string[] = [];

		// Street and number
		if (address.street) {
			let streetPart = address.street;
			if (address.number) {
				streetPart += ` ${address.number}`;
			}
			if (address.additional_information) {
				streetPart += `, ${address.additional_information}`;
			}
			parts.push(streetPart);
		}

		// City and postal code
		if (address.city) {
			if (address.postal_code) {
				parts.push(`${address.postal_code} ${address.city}`);
			} else {
				parts.push(address.city);
			}
		}

		// Country
		if (address.country) {
			parts.push(address.country);
		}

		return parts.join(', ');
	}

	/**
	 * Calculate distance between two addresses
	 */
	static calculateDistance(
		address1: LocalizedAddress,
		address2: LocalizedAddress,
	): number {
		const lat1 = address1.coordinates.latitude;
		const lon1 = address1.coordinates.longitude;
		const lat2 = address2.coordinates.latitude;
		const lon2 = address2.coordinates.longitude;

		const R = 6371; // Radius of the Earth in kilometers
		const dLat = this.deg2rad(lat2 - lat1);
		const dLon = this.deg2rad(lon2 - lon1);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(this.deg2rad(lat1)) *
				Math.cos(this.deg2rad(lat2)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c; // Distance in kilometers

		return Math.round(distance * 100) / 100; // Round to 2 decimal places
	}

	private static deg2rad(deg: number): number {
		return deg * (Math.PI / 180);
	}
}
