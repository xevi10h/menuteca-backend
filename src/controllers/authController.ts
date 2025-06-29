import { UserService } from '@/services/userService';
import {
	generateResetToken,
	generateToken,
	verifyResetToken,
} from '@/utils/auth';
import {
	validateData,
	createUserSchema,
	loginSchema,
	forgotPasswordSchema,
	resetPasswordSchema,
} from '@/utils/validation';
import { asyncHandler } from '@/middleware/errorHandler';
import { AsyncControllerFunction, AuthResponse } from '@/types/controllers';
import { EmailService } from '@/services/emailService';

/**
 * Register a new user
 */
export const register: AsyncControllerFunction<AuthResponse> = asyncHandler(
	async (req, res) => {
		const { isValid, data, errors } = validateData(createUserSchema, req.body);

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
export const login: AsyncControllerFunction<AuthResponse> = asyncHandler(
	async (req, res) => {
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
export const getProfile: AsyncControllerFunction = asyncHandler(
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
export const googleAuth: AsyncControllerFunction<AuthResponse> = asyncHandler(
	async (req, res) => {
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
export const refreshToken: AsyncControllerFunction<{ token: string }> =
	asyncHandler(async (req, res) => {
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
	});

/**
 * Change password
 */
export const changePassword: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
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
export const setPassword: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
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
				error: 'User already has a password set. Use change password instead.',
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

/**
 * Forgot password - Send reset email
 */
export const forgotPassword: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
		const { isValid, data, errors } = validateData(
			forgotPasswordSchema,
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

		const { email } = data!;

		// Check if user exists
		const user = await UserService.getUserByEmail(email);

		if (!user) {
			// Don't reveal if email exists or not for security
			res.json({
				success: true,
				message:
					'If an account with that email exists, a reset link has been sent.',
			});
			return;
		}

		// Generate reset token
		const resetToken = generateResetToken(user.id, user.email);

		// Store reset token in database (you might want to add this to UserService)
		await UserService.storeResetToken(user.id, resetToken);

		// Send reset email
		try {
			await EmailService.sendPasswordResetEmail(
				user.email,
				user.name,
				resetToken,
			);

			res.json({
				success: true,
				message:
					'If an account with that email exists, a reset link has been sent.',
			});
		} catch (error) {
			console.error('Failed to send reset email:', error);
			res.status(500).json({
				success: false,
				error: 'Failed to send reset email. Please try again later.',
			});
		}
	},
);

/**
 * Reset password with token
 */
export const resetPassword: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
		const { isValid, data, errors } = validateData(
			resetPasswordSchema,
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

		const { token, newPassword } = data!;

		// Verify reset token
		const tokenData = verifyResetToken(token);

		if (!tokenData) {
			res.status(400).json({
				success: false,
				error: 'Invalid or expired reset token',
			});
			return;
		}

		// Check if token exists in database and is not used
		const isValidToken = await UserService.validateResetToken(
			tokenData.userId,
			token,
		);

		if (!isValidToken) {
			res.status(400).json({
				success: false,
				error: 'Invalid or expired reset token',
			});
			return;
		}

		// Update password
		await UserService.updatePassword(tokenData.userId, newPassword);

		// Invalidate the reset token
		await UserService.invalidateResetToken(tokenData.userId, token);

		res.json({
			success: true,
			message: 'Password reset successfully',
		});
	},
);
