import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { JwtPayload, Language } from '@/types/common';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = 3600 * 24 * 7; // 7 days in seconds
const RESET_TOKEN_SECRET =
	process.env.RESET_TOKEN_SECRET || process.env.JWT_SECRET;
const RESET_TOKEN_EXPIRY = 3600; // 1 hour in seconds

if (!JWT_SECRET) {
	throw new Error('JWT_SECRET environment variable is required');
}

if (!RESET_TOKEN_SECRET) {
	throw new Error('RESET_TOKEN_SECRET environment variable is required');
}

// Asegurar que JWT_SECRET es un string válido
const jwtSecret: string = JWT_SECRET;
const resetTokenSecret: string = RESET_TOKEN_SECRET;

// Interface for reset token payload
interface ResetTokenPayload {
	userId: string;
	email: string;
	type: 'password_reset';
	iat?: number;
	exp?: number;
}

/**
 * Generates a JWT token for a user
 */
export const generateToken = (
	userId: string,
	email: string,
	language: Language,
): string => {
	const payload = {
		userId,
		email,
		language,
	};

	const options: SignOptions = {
		expiresIn: JWT_EXPIRES_IN, // Use seconds instead of string
	};

	return jwt.sign(payload, jwtSecret, options);
};

/**
 * Verifies and decodes a JWT token
 */
export const verifyToken = (token: string): JwtPayload => {
	try {
		const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
		return decoded;
	} catch (error) {
		throw new Error('Invalid or expired token');
	}
};

/**
 * Generate a password reset token
 */
export const generateResetToken = (userId: string, email: string): string => {
	const payload: ResetTokenPayload = {
		userId,
		email,
		type: 'password_reset',
	};

	const options: SignOptions = {
		expiresIn: RESET_TOKEN_EXPIRY,
	};

	return jwt.sign(payload, resetTokenSecret, options);
};

/**
 * Verify and decode a reset token
 */
export const verifyResetToken = (token: string): ResetTokenPayload | null => {
	try {
		const decoded = jwt.verify(token, resetTokenSecret) as ResetTokenPayload;

		// Ensure it's a password reset token
		if (decoded.type !== 'password_reset') {
			return null;
		}

		return decoded;
	} catch (error) {
		// Token is invalid or expired
		return null;
	}
};

/**
 * Generate a secure random token (alternative to JWT)
 */
export const generateSecureToken = (length: number = 32): string => {
	return crypto.randomBytes(length).toString('hex');
};

/**
 * Hash a token for secure storage
 */
export const hashToken = (token: string): string => {
	return crypto.createHash('sha256').update(token).digest('hex');
};

/**
 * Verify a token against its hash
 */
export const verifyTokenHash = (token: string, hash: string): boolean => {
	const tokenHash = hashToken(token);
	return crypto.timingSafeEqual(Buffer.from(tokenHash), Buffer.from(hash));
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
 * @deprecated Use generateSecureToken instead for better security
 */
export const generateRandomToken = (): string => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

/**
 * Validates that a token is a valid reset token format
 */
export const isValidResetToken = (token: string): boolean => {
	try {
		const decoded = verifyResetToken(token);
		return decoded !== null && decoded.type === 'password_reset';
	} catch {
		return false;
	}
};

/**
 * Generate a secure verification code (for 2FA, email verification, etc.)
 */
export const generateVerificationCode = (length: number = 6): string => {
	const digits = '0123456789';
	let result = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = crypto.randomInt(0, digits.length);
		result += digits[randomIndex];
	}

	return result;
};

/**
 * Convert time string to seconds for JWT expiresIn
 */
const parseExpiryToSeconds = (expiry: string): number => {
	const timeUnit = expiry.slice(-1).toLowerCase();
	const timeValue = parseInt(expiry.slice(0, -1));

	switch (timeUnit) {
		case 's':
			return timeValue;
		case 'm':
			return timeValue * 60;
		case 'h':
			return timeValue * 3600;
		case 'd':
			return timeValue * 86400;
		default:
			return parseInt(expiry) || 3600; // Default to 1 hour
	}
};

/**
 * Creates a time-limited token with custom expiry
 */
export const generateTimedToken = (
	payload: Record<string, any>,
	expiresIn: string | number = '15m',
): string => {
	const options: SignOptions = {
		expiresIn:
			typeof expiresIn === 'string'
				? parseExpiryToSeconds(expiresIn)
				: expiresIn,
	};
	return jwt.sign(payload, jwtSecret, options);
};

/**
 * Verify a timed token and return its payload
 */
export const verifyTimedToken = (token: string): any => {
	try {
		return jwt.verify(token, jwtSecret);
	} catch (error) {
		throw new Error('Invalid or expired timed token');
	}
};
