import { UserService } from '@/services/userService';
import { validateData, updateUserSchema } from '@/utils/validation';
import { PaginatedResponse } from '@/types/common';
import { User } from '@/types/entities';
import { asyncHandler } from '@/middleware/errorHandler';
import { AsyncControllerFunction } from '@/types/controllers';

/**
 * Get current user profile
 */
export const getProfile: AsyncControllerFunction<User> = asyncHandler(
	async (req, res) => {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		const user = await UserService.getUserById(req.user.userId);

		if (!user) {
			res.status(404).json({
				success: false,
				error: 'User not found',
			});
			return;
		}

		res.json({
			success: true,
			data: user,
		});
	},
);

/**
 * Update user profile
 */
export const updateProfile: AsyncControllerFunction<User> = asyncHandler(
	async (req, res) => {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		const { isValid, data, errors } = validateData(updateUserSchema, req.body);

		if (!isValid) {
			res.status(400).json({
				success: false,
				error: 'Validation error',
				errors,
			});
			return;
		}

		// Check if username is available (if being updated)
		if (data!.username) {
			const currentUser = await UserService.getUserById(req.user.userId);
			if (currentUser && currentUser.username !== data!.username) {
				const usernameAvailable = await UserService.isUsernameAvailable(
					data!.username,
				);
				if (!usernameAvailable) {
					res.status(409).json({
						success: false,
						error: 'Username already exists',
					});
					return;
				}
			}
		}

		const updatedUser = await UserService.updateUser(req.user.userId, data!);

		res.json({
			success: true,
			data: updatedUser,
			message: 'Profile updated successfully',
		});
	},
);

/**
 * Delete user account
 */
export const deleteAccount: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		await UserService.deleteUser(req.user.userId);

		res.json({
			success: true,
			message: 'Account deleted successfully',
		});
	},
);

/**
 * Soft delete user account
 */
export const softDeleteAccount: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'User not authenticated',
			});
			return;
		}

		await UserService.softDeleteUser(req.user.userId);

		res.json({
			success: true,
			message: 'Account deleted successfully',
		});
	},
);

/**
 * Get user by ID (public profile)
 */
export const getUserById: AsyncControllerFunction<Partial<User>> = asyncHandler(
	async (req, res) => {
		const { id } = req.params;

		if (!id) {
			res.status(400).json({
				success: false,
				error: 'User ID is required',
			});
			return;
		}

		const user = await UserService.getUserById(id);

		if (!user) {
			res.status(404).json({
				success: false,
				error: 'User not found',
			});
			return;
		}

		// Return only public information
		const publicProfile = {
			id: user.id,
			username: user.username,
			name: user.name,
			photo: user.photo,
			created_at: user.created_at,
		};

		res.json({
			success: true,
			data: publicProfile,
		});
	},
);

/**
 * Check username availability
 */
export const checkUsername: AsyncControllerFunction<{ available: boolean }> =
	asyncHandler(async (req, res) => {
		const { username } = req.params;

		if (!username || username.length < 3) {
			res.status(400).json({
				success: false,
				error: 'Username must be at least 3 characters long',
			});
			return;
		}

		const available = await UserService.isUsernameAvailable(username);

		res.json({
			success: true,
			data: { available },
		});
	});

/**
 * Check email availability
 */
export const checkEmail: AsyncControllerFunction<{ available: boolean }> =
	asyncHandler(async (req, res) => {
		const { email } = req.params;

		if (!email || !email.includes('@')) {
			res.status(400).json({
				success: false,
				error: 'Valid email is required',
			});
			return;
		}

		const available = await UserService.isEmailAvailable(email);

		res.json({
			success: true,
			data: { available },
		});
	});

/**
 * Get all users (admin function)
 */
export const getAllUsers: AsyncControllerFunction<PaginatedResponse<User>> =
	asyncHandler(async (req, res) => {
		const page = parseInt(req.query.page as string) || 1;
		const limit = parseInt(req.query.limit as string) || 20;

		if (page < 1 || limit < 1 || limit > 100) {
			res.status(400).json({
				success: false,
				error: 'Invalid pagination parameters',
			});
			return;
		}

		const { users, total } = await UserService.getAllUsers(page, limit);
		const totalPages = Math.ceil(total / limit);

		res.json({
			success: true,
			data: {
				data: users,
				pagination: {
					page,
					limit,
					total,
					totalPages,
					hasNext: page < totalPages,
					hasPrev: page > 1,
				},
			},
		});
	});

/**
 * Search users by username or name
 */
export const searchUsers: AsyncControllerFunction<Partial<User>[]> =
	asyncHandler(async (req, res) => {
		const { q: query } = req.query;

		if (!query || typeof query !== 'string' || query.length < 2) {
			res.status(400).json({
				success: false,
				error: 'Search query must be at least 2 characters long',
			});
			return;
		}

		// This would need to be implemented in UserService
		// For now, we'll return an empty array as a placeholder
		const users: Partial<User>[] = [];

		res.json({
			success: true,
			data: users,
		});
	});
