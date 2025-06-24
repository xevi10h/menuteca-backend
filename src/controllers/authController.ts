import { Request, Response } from 'express';
import { UserService } from '@/services/userService';
import { generateToken } from '@/utils/auth';
import {
	validateData,
	createUserSchema,
	loginSchema,
} from '@/utils/validation';
import { ApiResponse } from '@/types/common';
import { AppError } from '@/middleware/errorHandler';
import { asyncHandler } from '@/middleware/errorHandler';

interface AuthResponse {
	user: {
		id: string;
		email: string;
		username: string;
		name: string;
		photo?: string;
		language: string;
	};
	token: string;
}

export class AuthController {
	/**
	 * Register a new user
	 */
	static register = asyncHandler(
		async (req: Request, res: Response<ApiResponse<AuthResponse>>) => {
			const { isValid, data, errors } = validateData(
				createUserSchema,
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

			// Check if email is available
			const emailAvailable = await UserService.isEmailAvailable(data!.email);
			if (!emailAvailable) {
				res.status(409).json({
					success: false,
					error: 'Email already exists',
				});
				return;
			}

			// Check if username is available
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

			const user = await UserService.createUser(data!);
			const token = generateToken(user.id, user.email, user.language);

			res.status(201).json({
				success: true,
				data: {
					user: {
						id: user.id,
						email: user.email,
						username: user.username,
						name: user.name,
						photo: user.photo,
						language: user.language,
					},
					token,
				},
				message: 'User registered successfully',
			});
		},
	);

	/**
	 * Login user
	 */
	static login = asyncHandler(
		async (req: Request, res: Response<ApiResponse<AuthResponse>>) => {
			const { isValid, data, errors } = validateData(loginSchema, req.body);

			if (!isValid) {
				res.status(400).json({
					success: false,
					error: 'Validation error',
					errors,
				});
				return;
			}

			const user = await UserService.verifyUserPassword(
				data!.email,
				data!.password,
			);

			if (!user) {
				res.status(401).json({
					success: false,
					error: 'Invalid email or password',
				});
				return;
			}

			const token = generateToken(user.id, user.email, user.language);

			res.json({
				success: true,
				data: {
					user: {
						id: user.id,
						email: user.email,
						username: user.username,
						name: user.name,
						photo: user.photo,
						language: user.language,
					},
					token,
				},
				message: 'Login successful',
			});
		},
	);

	/**
	 * Get current user profile
	 */
	static getProfile = asyncHandler(
		async (req: Request, res: Response<ApiResponse>) => {
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
				data: {
					id: user.id,
					email: user.email,
					username: user.username,
					name: user.name,
					photo: user.photo,
					language: user.language,
					has_password: user.has_password,
					created_at: user.created_at,
				},
			});
		},
	);

	/**
	 * Google OAuth login/register
	 */
	static googleAuth = asyncHandler(
		async (req: Request, res: Response<ApiResponse<AuthResponse>>) => {
			const { google_id, email, name, photo, language = 'es_ES' } = req.body;

			if (!google_id || !email || !name) {
				res.status(400).json({
					success: false,
					error: 'Google ID, email, and name are required',
				});
				return;
			}

			// Check if user exists with this Google ID
			let user = await UserService.getUserByGoogleId(google_id);

			if (!user) {
				// Check if user exists with this email
				user = await UserService.getUserByEmail(email);

				if (user) {
					res.status(400).json({
						success: false,
						error: 'An account with this email already exists',
					});
					return;
				}

				// Create new user
				const username =
					email.split('@')[0] + Math.random().toString(36).substring(2, 6);

				user = await UserService.createUser({
					email,
					username,
					name,
					photo,
					google_id,
					language,
				});
			}

			const token = generateToken(user.id, user.email, user.language);

			res.json({
				success: true,
				data: {
					user: {
						id: user.id,
						email: user.email,
						username: user.username,
						name: user.name,
						photo: user.photo,
						language: user.language,
					},
					token,
				},
				message: 'Google authentication successful',
			});
		},
	);

	/**
	 * Refresh token
	 */
	static refreshToken = asyncHandler(
		async (req: Request, res: Response<ApiResponse<{ token: string }>>) => {
			if (!req.user) {
				res.status(401).json({
					success: false,
					error: 'User not authenticated',
				});
				return;
			}

			// Verify user still exists
			const user = await UserService.getUserById(req.user.userId);

			if (!user) {
				res.status(404).json({
					success: false,
					error: 'User not found',
				});
				return;
			}

			const newToken = generateToken(user.id, user.email, user.language);

			res.json({
				success: true,
				data: { token: newToken },
				message: 'Token refreshed successfully',
			});
		},
	);

	/**
	 * Change password
	 */
	static changePassword = asyncHandler(
		async (req: Request, res: Response<ApiResponse>) => {
			if (!req.user) {
				res.status(401).json({
					success: false,
					error: 'User not authenticated',
				});
				return;
			}

			const { currentPassword, newPassword } = req.body;

			if (!currentPassword || !newPassword) {
				res.status(400).json({
					success: false,
					error: 'Current password and new password are required',
				});
				return;
			}

			// Get user with password
			const user = await UserService.getUserById(req.user.userId);

			if (!user) {
				res.status(404).json({
					success: false,
					error: 'User not found',
				});
				return;
			}

			if (!user.has_password) {
				res.status(400).json({
					success: false,
					error: 'User has no password set',
				});
				return;
			}

			// Verify current password
			const validUser = await UserService.verifyUserPassword(
				user.email,
				currentPassword,
			);

			if (!validUser) {
				res.status(401).json({
					success: false,
					error: 'Current password is incorrect',
				});
				return;
			}

			await UserService.updatePassword(req.user.userId, newPassword);

			res.json({
				success: true,
				message: 'Password changed successfully',
			});
		},
	);

	/**
	 * Set password (for users without password, like Google users)
	 */
	static setPassword = asyncHandler(
		async (req: Request, res: Response<ApiResponse>) => {
			if (!req.user) {
				res.status(401).json({
					success: false,
					error: 'User not authenticated',
				});
				return;
			}

			const { newPassword } = req.body;

			if (!newPassword) {
				res.status(400).json({
					success: false,
					error: 'New password is required',
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

			if (user.has_password) {
				res.status(400).json({
					success: false,
					error:
						'User already has a password set. Use change password instead.',
				});
				return;
			}

			await UserService.updatePassword(req.user.userId, newPassword);

			res.json({
				success: true,
				message: 'Password set successfully',
			});
		},
	);
}
