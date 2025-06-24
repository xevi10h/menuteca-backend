import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JwtPayload, Language } from '@/types/common';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

if (!JWT_SECRET) {
	throw new Error('JWT_SECRET environment variable is required');
}

/**
 * Generates a JWT token for a user
 */
export const generateToken = (
	userId: string,
	email: string,
	language: Language,
): string => {
	const payload: JwtPayload = {
		userId,
		email,
		language,
	};

	return jwt.sign(payload, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN,
	});
};

/**
 * Verifies and decodes a JWT token
 */
export const verifyToken = (token: string): JwtPayload => {
	try {
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
		return decoded;
	} catch (error) {
		throw new Error('Invalid or expired token');
	}
};

/**
 * Hashes a password using bcrypt
 */
export const hashPassword = async (password: string): Promise<string> => {
	const saltRounds = 12;
	return bcrypt.hash(password, saltRounds);
};

/**
 * Verifies a password against its hash
 */
export const verifyPassword = async (
	password: string,
	hash: string,
): Promise<boolean> => {
	return bcrypt.compare(password, hash);
};

/**
 * Extracts token from Authorization header
 */
export const extractTokenFromHeader = (
	authHeader: string | undefined,
): string | null => {
	if (!authHeader) return null;

	const parts = authHeader.split(' ');
	if (parts.length !== 2 || parts[0] !== 'Bearer') {
		return null;
	}

	return parts[1];
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

/**
 * Validates password strength
 */
export const isValidPassword = (password: string): boolean => {
	// At least 8 characters, 1 uppercase, 1 lowercase, 1 number
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
	return passwordRegex.test(password);
};

/**
 * Validates username format
 */
export const isValidUsername = (username: string): boolean => {
	// 3-30 characters, alphanumeric and underscores only
	const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
	return usernameRegex.test(username);
};

/**
 * Generates a random token for password reset, etc.
 */
export const generateRandomToken = (): string => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};
