import { Request, Response } from 'express';
import { CuisineService } from '@/services/cuisineService';
import {
	validateData,
	createCuisineSchema,
	updateCuisineSchema,
} from '@/utils/validation';
import { ApiResponse } from '@/types/common';
import { Cuisine, LocalizedCuisine } from '@/types/entities';
import { asyncHandler } from '@/middleware/errorHandler';

export class CuisineController {
	/**
	 * Create a new cuisine
	 */
	static createCuisine = asyncHandler(
		async (req: Request, res: Response<ApiResponse<Cuisine>>) => {
			const { isValid, data, errors } = validateData(
				createCuisineSchema,
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

			const cuisine = await CuisineService.createCuisine(data!);

			res.status(201).json({
				success: true,
				data: cuisine,
				message: 'Cuisine created successfully',
			});
		},
	);

	/**
	 * Get all cuisines (localized)
	 */
	static getAllCuisines = asyncHandler(
		async (req: Request, res: Response<ApiResponse<LocalizedCuisine[]>>) => {
			const userLanguage = req.user?.language || 'es_ES';
			const cuisines = await CuisineService.getAllLocalizedCuisines(
				userLanguage,
			);

			res.json({
				success: true,
				data: cuisines,
			});
		},
	);

	/**
	 * Get cuisine by ID (localized)
	 */
	static getCuisineById = asyncHandler(
		async (req: Request, res: Response<ApiResponse<LocalizedCuisine>>) => {
			const { id } = req.params;
			const userLanguage = req.user?.language || 'es_ES';

			const cuisine = await CuisineService.getLocalizedCuisineById(
				id,
				userLanguage,
			);

			if (!cuisine) {
				res.status(404).json({
					success: false,
					error: 'Cuisine not found',
				});
				return;
			}

			res.json({
				success: true,
				data: cuisine,
			});
		},
	);

	/**
	 * Update cuisine
	 */
	static updateCuisine = asyncHandler(
		async (req: Request, res: Response<ApiResponse<Cuisine>>) => {
			const { id } = req.params;
			const { isValid, data, errors } = validateData(
				updateCuisineSchema,
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

			const updatedCuisine = await CuisineService.updateCuisine(id, data!);

			res.json({
				success: true,
				data: updatedCuisine,
				message: 'Cuisine updated successfully',
			});
		},
	);

	/**
	 * Delete cuisine
	 */
	static deleteCuisine = asyncHandler(
		async (req: Request, res: Response<ApiResponse>) => {
			const { id } = req.params;

			await CuisineService.deleteCuisine(id);

			res.json({
				success: true,
				message: 'Cuisine deleted successfully',
			});
		},
	);

	/**
	 * Search cuisines
	 */
	static searchCuisines = asyncHandler(
		async (req: Request, res: Response<ApiResponse<LocalizedCuisine[]>>) => {
			const { q: query } = req.query;

			if (!query || typeof query !== 'string') {
				res.status(400).json({
					success: false,
					error: 'Search query is required',
				});
				return;
			}

			const userLanguage = req.user?.language || 'es_ES';
			const cuisines = await CuisineService.searchCuisines(query, userLanguage);

			res.json({
				success: true,
				data: cuisines,
			});
		},
	);

	/**
	 * Get cuisine statistics
	 */
	static getCuisineStats = asyncHandler(
		async (req: Request, res: Response<ApiResponse>) => {
			const stats = await CuisineService.getCuisineStats();

			res.json({
				success: true,
				data: stats,
			});
		},
	);
}
