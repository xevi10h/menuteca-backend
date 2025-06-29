import { supabase } from '@/database/client';
import { User, CreateUserInput, UpdateUserInput } from '@/types/entities';
import {
	hashPassword,
	hashToken,
	verifyPassword,
	verifyTokenHash,
} from '@/utils/auth';
import { AppError } from '@/middleware/errorHandler';

export class UserService {
	/**
	 * Create a new user
	 */
	static async createUser(userData: CreateUserInput): Promise<User> {
		const { password, ...userDataWithoutPassword } = userData;

		let hashedPassword: string | undefined;
		if (password) {
			hashedPassword = await hashPassword(password);
		}

		const { data, error } = await supabase
			.from('users')
			.insert({
				...userDataWithoutPassword,
				password_hash: hashedPassword,
				has_password: !!password,
			})
			.select()
			.single();

		if (error) {
			if (error.code === '23505') {
				// Unique constraint violation
				if (error.message.includes('email')) {
					throw new AppError('Email already exists', 409);
				}
				if (error.message.includes('username')) {
					throw new AppError('Username already exists', 409);
				}
				if (error.message.includes('google_id')) {
					throw new AppError('Google account already linked', 409);
				}
			}
			throw new AppError('Failed to create user', 500);
		}

		// Remove password_hash from response
		const { password_hash, ...userWithoutPassword } = data;
		return userWithoutPassword as User;
	}

	/**
	 * Get user by ID
	 */
	static async getUserById(userId: string): Promise<User | null> {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('id', userId)
			.is('deleted_at', null)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				return null;
			}
			throw new AppError('Failed to fetch user', 500);
		}

		// Remove password_hash from response
		const { password_hash, ...userWithoutPassword } = data;
		return userWithoutPassword as User;
	}

	/**
	 * Get user by email
	 */
	static async getUserByEmail(email: string): Promise<User | null> {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('email', email)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				return null;
			}
			throw new AppError('Failed to fetch user', 500);
		}

		// Remove password_hash from response
		const { password_hash, ...userWithoutPassword } = data;
		return userWithoutPassword as User;
	}

	/**
	 * Get user by Google ID
	 */
	static async getUserByGoogleId(googleId: string): Promise<User | null> {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('google_id', googleId)
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				return null;
			}
			throw new AppError('Failed to fetch user', 500);
		}

		// Remove password_hash from response
		const { password_hash, ...userWithoutPassword } = data;
		return userWithoutPassword as User;
	}

	/**
	 * Update user
	 */
	static async updateUser(
		userId: string,
		updateData: UpdateUserInput,
	): Promise<User> {
		const { data, error } = await supabase
			.from('users')
			.update(updateData)
			.eq('id', userId)
			.select()
			.single();

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				throw new AppError('User not found', 404);
			}
			if (error.code === '23505') {
				// Unique constraint violation
				if (error.message.includes('username')) {
					throw new AppError('Username already exists', 409);
				}
			}
			throw new AppError('Failed to update user', 500);
		}

		// Remove password_hash from response
		const { password_hash, ...userWithoutPassword } = data;
		return userWithoutPassword as User;
	}

	/**
	 * Delete user
	 */
	static async deleteUser(userId: string): Promise<void> {
		const { error } = await supabase.from('users').delete().eq('id', userId);

		if (error) {
			throw new AppError('Failed to delete user', 500);
		}
	}

	/**
	 * Soft delete user
	 */
	static async softDeleteUser(userId: string): Promise<void> {
		const { error } = await supabase
			.from('users')
			.update({ deleted_at: new Date().toISOString() })
			.eq('id', userId)
			.is('deleted_at', null); // Solo si no está ya eliminado

		if (error) {
			throw new AppError('Failed to delete user', 500);
		}

		// Soft delete related data
		await Promise.all([
			// Soft delete user's restaurants
			supabase
				.from('restaurants')
				.update({ deleted_at: new Date().toISOString() })
				.eq('owner_id', userId)
				.is('deleted_at', null),

			// Soft delete user's reviews
			supabase
				.from('reviews')
				.update({ deleted_at: new Date().toISOString() })
				.eq('user_id', userId)
				.is('deleted_at', null),
		]);
	}

	/**
	 * Verify user password (for login)
	 */
	static async verifyUserPassword(
		email: string,
		password: string,
	): Promise<User | null> {
		// First get the user with password hash
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('email', email)
			.single();

		if (error || !data) {
			return null;
		}

		if (!data.password_hash) {
			throw new AppError('User has no password set', 400);
		}

		const isValidPassword = await verifyPassword(password, data.password_hash);
		if (!isValidPassword) {
			return null;
		}

		// Remove password_hash from response
		const { password_hash, ...userWithoutPassword } = data;
		return userWithoutPassword as User;
	}

	/**
	 * Update user password
	 */
	static async updatePassword(
		userId: string,
		newPassword: string,
	): Promise<void> {
		const hashedPassword = await hashPassword(newPassword);

		const { error } = await supabase
			.from('users')
			.update({
				password_hash: hashedPassword,
				has_password: true,
			})
			.eq('id', userId);

		if (error) {
			if (error.code === 'PGRST116') {
				// Not found
				throw new AppError('User not found', 404);
			}
			throw new AppError('Failed to update password', 500);
		}
	}

	/**
	 * Check if username is available
	 */
	static async isUsernameAvailable(username: string): Promise<boolean> {
		const { data, error } = await supabase
			.from('users')
			.select('id')
			.eq('username', username)
			.single();

		if (error && error.code === 'PGRST116') {
			return true; // Username not found, so it's available
		}

		return !data; // If data exists, username is taken
	}

	/**
	 * Check if email is available
	 */
	static async isEmailAvailable(email: string): Promise<boolean> {
		const { data, error } = await supabase
			.from('users')
			.select('id')
			.eq('email', email)
			.single();

		if (error && error.code === 'PGRST116') {
			return true; // Email not found, so it's available
		}

		return !data; // If data exists, email is taken
	}

	/**
	 * Get all users (admin function)
	 */
	static async getAllUsers(
		page: number = 1,
		limit: number = 20,
	): Promise<{ users: User[]; total: number }> {
		const offset = (page - 1) * limit;

		// Get total count
		const { count, error: countError } = await supabase
			.from('users')
			.select('*', { count: 'exact', head: true })
			.is('deleted_at', null);

		if (countError) {
			throw new AppError('Failed to count users', 500);
		}

		// Get users
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.is('deleted_at', null)
			.range(offset, offset + limit - 1)
			.order('created_at', { ascending: false });

		if (error) {
			throw new AppError('Failed to fetch users', 500);
		}

		// Remove password_hash from all users
		const usersWithoutPassword = data.map(
			({ password_hash, ...user }) => user as User,
		);

		return {
			users: usersWithoutPassword,
			total: count || 0,
		};
	}

	/**
	 * Store a password reset token for a user
	 */
	static async storeResetToken(userId: string, token: string): Promise<void> {
		const hashedToken = hashToken(token);
		const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

		// First, invalidate any existing tokens for this user
		await supabase
			.from('password_reset_tokens')
			.update({ is_used: true })
			.eq('user_id', userId)
			.eq('is_used', false);

		// Insert new token
		const { error } = await supabase.from('password_reset_tokens').insert({
			user_id: userId,
			token_hash: hashedToken,
			expires_at: expiresAt.toISOString(),
			is_used: false,
		});

		if (error) {
			console.error('Error storing reset token:', error);
			throw new AppError('Failed to store reset token', 500);
		}
	}

	/**
	 * Validate a password reset token
	 */
	static async validateResetToken(
		userId: string,
		token: string,
	): Promise<boolean> {
		const hashedToken = hashToken(token);

		const { data, error } = await supabase
			.from('password_reset_tokens')
			.select('*')
			.eq('user_id', userId)
			.eq('is_used', false)
			.gt('expires_at', new Date().toISOString())
			.single();

		if (error || !data) {
			return false;
		}

		// Verify the token hash
		return verifyTokenHash(token, data.token_hash);
	}

	/**
	 * Invalidate a password reset token after use
	 */
	static async invalidateResetToken(
		userId: string,
		token: string,
	): Promise<void> {
		const hashedToken = hashToken(token);

		const { error } = await supabase
			.from('password_reset_tokens')
			.update({ is_used: true, used_at: new Date().toISOString() })
			.eq('user_id', userId)
			.eq('token_hash', hashedToken)
			.eq('is_used', false);

		if (error) {
			console.error('Error invalidating reset token:', error);
			throw new AppError('Failed to invalidate reset token', 500);
		}
	}

	/**
	 * Clean up expired reset tokens (should be run periodically)
	 */
	static async cleanupExpiredResetTokens(): Promise<void> {
		const { error } = await supabase
			.from('password_reset_tokens')
			.delete()
			.lt('expires_at', new Date().toISOString());

		if (error) {
			console.error('Error cleaning up expired tokens:', error);
		}
	}
}
