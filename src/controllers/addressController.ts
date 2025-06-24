import { Request, Response } from 'express';
import { AddressService } from '@/services/addressService';
import {
	validateData,
	createAddressSchema,
	updateAddressSchema,
} from '@/utils/validation';
import { ApiResponse } from '@/types/common';
import { Address, LocalizedAddress } from '@/types/entities';
import { asyncHandler } from '@/middleware/errorHandler';

export class AddressController {
	/**
	 * Create a new address
	 */
	static createAddress = asyncHandler(
		async (req: Request, res: Response<ApiResponse<Address>>) => {
			const { isValid, data, errors } = validateData(
				createAddressSchema,
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

			const address = await AddressService.createAddress(data!);

			res.status(201).json({
				success: true,
				data: address,
				message: 'Address created successfully',
			});
		},
	);

	/**
	 * Get address by ID (localized)
	 */
	static getAddressById = asyncHandler(
		async (req: Request, res: Response<ApiResponse<LocalizedAddress>>) => {
			const { id } = req.params;
			const userLanguage = req.user?.language || 'es_ES';

			if (!id) {
				res.status(400).json({
					success: false,
					error: 'Address ID is required',
				});
				return;
			}

			const address = await AddressService.getLocalizedAddressById(
				id,
				userLanguage,
			);

			if (!address) {
				res.status(404).json({
					success: false,
					error: 'Address not found',
				});
				return;
			}

			res.json({
				success: true,
				data: address,
			});
		},
	);

	/**
	 * Update address
	 */
	static updateAddress = asyncHandler(
		async (req: Request, res: Response<ApiResponse<Address>>) => {
			const { id } = req.params;
			const { isValid, data, errors } = validateData(
				updateAddressSchema,
				req.body,
			);

			if (!id) {
				res.status(400).json({
					success: false,
					error: 'Address ID is required',
				});
				return;
			}

			if (!isValid) {
				res.status(400).json({
					success: false,
					error: 'Validation error',
					errors,
				});
				return;
			}

			const updatedAddress = await AddressService.updateAddress(id, data!);

			res.json({
				success: true,
				data: updatedAddress,
				message: 'Address updated successfully',
			});
		},
	);

	/**
	 * Delete address
	 */
	static deleteAddress = asyncHandler(
		async (req: Request, res: Response<ApiResponse>) => {
			const { id } = req.params;

			if (!id) {
				res.status(400).json({
					success: false,
					error: 'Address ID is required',
				});
				return;
			}

			await AddressService.deleteAddress(id);

			res.json({
				success: true,
				message: 'Address deleted successfully',
			});
		},
	);

	/**
	 * Search addresses
	 */
	static searchAddresses = asyncHandler(
		async (req: Request, res: Response<ApiResponse<LocalizedAddress[]>>) => {
			const { q: query, limit: limitStr } = req.query;

			if (!query || typeof query !== 'string' || query.length < 2) {
				res.status(400).json({
					success: false,
					error: 'Search query must be at least 2 characters long',
				});
				return;
			}

			const limit = limitStr ? parseInt(limitStr as string, 10) : 20;
			if (isNaN(limit) || limit < 1 || limit > 50) {
				res.status(400).json({
					success: false,
					error: 'Limit must be a number between 1 and 50',
				});
				return;
			}

			const userLanguage = req.user?.language || 'es_ES';
			const addresses = await AddressService.searchAddresses(
				query,
				userLanguage,
				limit,
			);

			res.json({
				success: true,
				data: addresses,
			});
		},
	);

	/**
	 * Get nearby addresses
	 */
	static getNearbyAddresses = asyncHandler(
		async (req: Request, res: Response<ApiResponse<LocalizedAddress[]>>) => {
			const {
				latitude: latStr,
				longitude: lngStr,
				radius: radiusStr,
				limit: limitStr,
			} = req.query;

			if (!latStr || !lngStr) {
				res.status(400).json({
					success: false,
					error: 'Latitude and longitude are required',
				});
				return;
			}

			const latitude = parseFloat(latStr as string);
			const longitude = parseFloat(lngStr as string);
			const radius = radiusStr ? parseFloat(radiusStr as string) : 10;
			const limit = limitStr ? parseInt(limitStr as string, 10) : 20;

			if (isNaN(latitude) || latitude < -90 || latitude > 90) {
				res.status(400).json({
					success: false,
					error: 'Invalid latitude (must be between -90 and 90)',
				});
				return;
			}

			if (isNaN(longitude) || longitude < -180 || longitude > 180) {
				res.status(400).json({
					success: false,
					error: 'Invalid longitude (must be between -180 and 180)',
				});
				return;
			}

			if (isNaN(radius) || radius < 0.1 || radius > 100) {
				res.status(400).json({
					success: false,
					error: 'Invalid radius (must be between 0.1 and 100 km)',
				});
				return;
			}

			if (isNaN(limit) || limit < 1 || limit > 50) {
				res.status(400).json({
					success: false,
					error: 'Invalid limit (must be between 1 and 50)',
				});
				return;
			}

			const userLanguage = req.user?.language || 'es_ES';
			const addresses = await AddressService.getAddressesByCoordinates(
				latitude,
				longitude,
				radius,
				userLanguage,
				limit,
			);

			res.json({
				success: true,
				data: addresses,
			});
		},
	);

	/**
	 * Calculate distance between two addresses
	 */
	static calculateDistance = asyncHandler(
		async (req: Request, res: Response<ApiResponse<{ distance: number }>>) => {
			const { address1Id, address2Id } = req.params;
			const userLanguage = req.user?.language || 'es_ES';

			if (!address1Id || !address2Id) {
				res.status(400).json({
					success: false,
					error: 'Both address IDs are required',
				});
				return;
			}

			const [address1, address2] = await Promise.all([
				AddressService.getLocalizedAddressById(address1Id, userLanguage),
				AddressService.getLocalizedAddressById(address2Id, userLanguage),
			]);

			if (!address1 || !address2) {
				res.status(404).json({
					success: false,
					error: 'One or both addresses not found',
				});
				return;
			}

			const distance = AddressService.calculateDistance(address1, address2);

			res.json({
				success: true,
				data: { distance },
			});
		},
	);

	/**
	 * Format address for display
	 */
	static formatAddress = asyncHandler(
		async (
			req: Request,
			res: Response<ApiResponse<{ formattedAddress: string }>>,
		) => {
			const { id } = req.params;
			const userLanguage = req.user?.language || 'es_ES';

			if (!id) {
				res.status(400).json({
					success: false,
					error: 'Address ID is required',
				});
				return;
			}

			const address = await AddressService.getLocalizedAddressById(
				id,
				userLanguage,
			);

			if (!address) {
				res.status(404).json({
					success: false,
					error: 'Address not found',
				});
				return;
			}

			const formattedAddress = AddressService.formatAddress(address);

			res.json({
				success: true,
				data: { formattedAddress },
			});
		},
	);
}
