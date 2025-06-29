import { AuthService } from '@/services/authService';
import {
	validateData,
	createUserSchema,
	loginSchema,
	resetPasswordSchema,
} from '@/utils/validation';
import { asyncHandler } from '@/middleware/errorHandler';
import { AsyncControllerFunction, AuthResponse } from '@/types/controllers';
import { UserService } from '@/services/userService';

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

		const user = await AuthService.createUser(data!);
		const token = AuthService.generateToken(user);

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

		const user = await AuthService.loginUser(data!.email, data!.password);

		if (!user) {
			res.status(401).json({
				success: false,
				error: 'Invalid email or password',
			});
			return;
		}

		const token = AuthService.generateToken(user);

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

		try {
			const user = await AuthService.googleAuth({
				google_id,
				email,
				name,
				photo,
				language,
			});

			const token = AuthService.generateToken(user);

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
		} catch (error) {
			if (error instanceof Error && error.message.includes('already exists')) {
				res.status(400).json({
					success: false,
					error: error.message,
				});
				return;
			}
			throw error;
		}
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

		const newToken = AuthService.generateToken(user);

		res.json({
			success: true,
			data: { token: newToken },
			message: 'Token refreshed successfully',
		});
	});

/**
 * Send password reset code to email
 */
export const sendPasswordResetCode: AsyncControllerFunction = asyncHandler(
	async (req, res) => {
		const { email } = req.body;

		if (!email) {
			res.status(400).json({
				success: false,
				error: 'Email is required',
			});
			return;
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			res.status(400).json({
				success: false,
				error: 'Invalid email format',
			});
			return;
		}

		try {
			await AuthService.sendPasswordResetCode(email);

			res.json({
				success: true,
				message: 'Verification code sent to your email',
			});
		} catch (error) {
			console.error('Failed to send reset code:', error);
			res.status(500).json({
				success: false,
				error: 'Failed to send reset code. Please try again later.',
			});
		}
	},
);

/**
 * Verify password reset code
 */
export const verifyPasswordResetCode: AsyncControllerFunction<{
	token: string;
}> = asyncHandler(async (req, res) => {
	const { email, code } = req.body;

	if (!email || !code) {
		res.status(400).json({
			success: false,
			error: 'Email and verification code are required',
		});
		return;
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		res.status(400).json({
			success: false,
			error: 'Invalid email format',
		});
		return;
	}

	// Validate code format (6 digits)
	const codeRegex = /^\d{6}$/;
	if (!codeRegex.test(code)) {
		res.status(400).json({
			success: false,
			error: 'Invalid code format. Code must be 6 digits.',
		});
		return;
	}

	try {
		const resetToken = await AuthService.verifyPasswordResetCode(email, code);

		res.json({
			success: true,
			data: { token: resetToken },
			message: 'Code verified successfully',
		});
	} catch (error) {
		console.error('Failed to verify reset code:', error);
		res.status(400).json({
			success: false,
			error: error instanceof Error ? error.message : 'Invalid or expired code',
		});
	}
});

/**
 * Reset password with token
 */
export const resetPasswordWithToken: AsyncControllerFunction = asyncHandler(
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

		try {
			await AuthService.resetPasswordWithToken(token, newPassword);

			res.json({
				success: true,
				message: 'Password reset successfully',
			});
		} catch (error) {
			console.error('Failed to reset password:', error);
			res.status(400).json({
				success: false,
				error:
					error instanceof Error ? error.message : 'Failed to reset password',
			});
		}
	},
);

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

		try {
			await AuthService.changePassword(
				req.user.userId,
				currentPassword,
				newPassword,
			);

			res.json({
				success: true,
				message: 'Password changed successfully',
			});
		} catch (error) {
			console.error('Failed to change password:', error);
			const statusCode =
				error instanceof Error && error.message.includes('incorrect')
					? 401
					: 400;
			res.status(statusCode).json({
				success: false,
				error:
					error instanceof Error ? error.message : 'Failed to change password',
			});
		}
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

		try {
			await AuthService.setPassword(req.user.userId, newPassword);

			res.json({
				success: true,
				message: 'Password set successfully',
			});
		} catch (error) {
			console.error('Failed to set password:', error);
			res.status(400).json({
				success: false,
				error:
					error instanceof Error ? error.message : 'Failed to set password',
			});
		}
	},
);
