import { UserService } from '@/services/userService';
import { EmailService } from '@/services/emailService';
import {
	generateToken,
	generateVerificationCode,
	hashPassword,
	verifyPassword,
	generateResetToken,
	verifyResetToken,
	hashToken,
	verifyTokenHash,
} from '@/utils/auth';
import { AppError } from '@/middleware/errorHandler';
import { supabase } from '@/database/client';
import { User, CreateUserInput } from '@/types/entities';

export class AuthService {
	/**
	 * Create a new user
	 */
	static async createUser(userData: CreateUserInput): Promise<User> {
		return UserService.createUser(userData);
	}

	/**
	 * Login user with email and password
	 */
	static async loginUser(
		email: string,
		password: string,
	): Promise<User | null> {
		return UserService.verifyUserPassword(email, password);
	}

	/**
	 * Login or register user with Google
	 */
	static async googleAuth(googleData: {
		google_id: string;
		email: string;
		name: string;
		photo?: string;
		language: string;
	}): Promise<User> {
		// Check if user exists with this Google ID
		let user = await UserService.getUserByGoogleId(googleData.google_id);

		if (!user) {
			// Check if user exists with this email
			user = await UserService.getUserByEmail(googleData.email);

			if (user) {
				throw new AppError('An account with this email already exists', 400);
			}

			// Create new user
			const username =
				googleData.email.split('@')[0] +
				Math.random().toString(36).substring(2, 6);

			user = await UserService.createUser({
				email: googleData.email,
				username,
				name: googleData.name,
				photo: googleData.photo,
				google_id: googleData.google_id,
				language: googleData.language as any,
			});
		}

		return user;
	}

	/**
	 * Send password reset code to email
	 */
	static async sendPasswordResetCode(email: string): Promise<void> {
		// Check if user exists
		const user = await UserService.getUserByEmail(email);

		if (!user) {
			// Don't reveal if email exists or not for security
			return;
		}

		// Generate 6-digit verification code
		const resetCode = generateVerificationCode(6);

		// Store reset code in database with expiration (15 minutes)
		const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now
		const hashedCode = hashToken(resetCode);

		// First, invalidate any existing codes for this user
		await supabase
			.from('password_reset_codes')
			.update({ is_used: true })
			.eq('user_id', user.id)
			.eq('is_used', false);

		// Insert new code
		const { error } = await supabase.from('password_reset_codes').insert({
			user_id: user.id,
			code_hash: hashedCode,
			expires_at: expiresAt.toISOString(),
			is_used: false,
		});

		if (error) {
			console.error('Error storing reset code:', error);
			throw new AppError('Failed to store reset code', 500);
		}

		// Send reset code email
		try {
			await EmailService.sendPasswordResetCodeEmail(
				user.email,
				user.name,
				resetCode,
			);
		} catch (error) {
			console.error('Failed to send reset code email:', error);
			throw new AppError('Failed to send reset email', 500);
		}
	}

	/**
	 * Verify password reset code
	 */
	static async verifyPasswordResetCode(
		email: string,
		code: string,
	): Promise<string> {
		// Get user by email
		const user = await UserService.getUserByEmail(email);

		if (!user) {
			throw new AppError('Invalid email or code', 400);
		}

		// Validate the code
		const hashedCode = hashToken(code);

		const { data, error } = await supabase
			.from('password_reset_codes')
			.select('*')
			.eq('user_id', user.id)
			.eq('is_used', false)
			.gt('expires_at', new Date().toISOString())
			.single();

		if (error || !data) {
			throw new AppError('Invalid or expired code', 400);
		}

		// Verify the code hash
		if (!verifyTokenHash(code, data.code_hash)) {
			throw new AppError('Invalid code', 400);
		}

		// Mark code as used
		await supabase
			.from('password_reset_codes')
			.update({ is_used: true, used_at: new Date().toISOString() })
			.eq('id', data.id);

		// Generate temporary token for password reset (valid for 30 minutes)
		const resetToken = generateResetToken(user.id, user.email);

		return resetToken;
	}

	/**
	 * Reset password with token
	 */
	static async resetPasswordWithToken(
		token: string,
		newPassword: string,
	): Promise<void> {
		// Verify reset token
		const tokenData = verifyResetToken(token);

		if (!tokenData) {
			throw new AppError('Invalid or expired reset token', 400);
		}

		// Update password
		await UserService.updatePassword(tokenData.userId, newPassword);
	}

	/**
	 * Change password for authenticated user
	 */
	static async changePassword(
		userId: string,
		currentPassword: string,
		newPassword: string,
	): Promise<void> {
		// Get user with password
		const user = await UserService.getUserById(userId);

		if (!user) {
			throw new AppError('User not found', 404);
		}

		if (!user.has_password) {
			throw new AppError('User has no password set', 400);
		}

		// Verify current password
		const validUser = await UserService.verifyUserPassword(
			user.email,
			currentPassword,
		);

		if (!validUser) {
			throw new AppError('Current password is incorrect', 401);
		}

		await UserService.updatePassword(userId, newPassword);
	}

	/**
	 * Set password for users without password (e.g., Google users)
	 */
	static async setPassword(userId: string, newPassword: string): Promise<void> {
		const user = await UserService.getUserById(userId);

		if (!user) {
			throw new AppError('User not found', 404);
		}

		if (user.has_password) {
			throw new AppError(
				'User already has a password set. Use change password instead.',
				400,
			);
		}

		await UserService.updatePassword(userId, newPassword);
	}

	/**
	 * Generate JWT token for user
	 */
	static generateToken(user: User): string {
		return generateToken(user.id, user.email, user.language);
	}

	/**
	 * Clean up expired reset codes (should be run periodically)
	 */
	static async cleanupExpiredResetCodes(): Promise<void> {
		const { error } = await supabase
			.from('password_reset_codes')
			.delete()
			.lt('expires_at', new Date().toISOString());

		if (error) {
			console.error('Error cleaning up expired codes:', error);
		}
	}
}
