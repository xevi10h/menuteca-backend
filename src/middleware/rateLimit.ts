import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { ApiResponse } from '@/types/common';

// General rate limiter for API requests
const rateLimiter = new RateLimiterMemory({
	points: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // Number of requests
	duration: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') / 1000, // Convert ms to seconds (15 minutes)
});

// Strict rate limiter for authentication endpoints
const authRateLimiter = new RateLimiterMemory({
	points: 5, // 5 attempts
	duration: 900, // per 15 minutes
	blockDuration: 900, // block for 15 minutes
});

// Rate limiter for review creation
const reviewRateLimiter = new RateLimiterMemory({
	points: 3, // 3 reviews
	duration: 3600, // per hour
});

/**
 * General rate limiting middleware
 */
export const rateLimit = async (
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): Promise<void> => {
	try {
		// Use IP address as key, with fallback to 'unknown' if undefined
		const key = req.ip || 'unknown';
		await rateLimiter.consume(key);
		next();
	} catch (rejRes: any) {
		const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
		res.set('Retry-After', String(secs));
		res.status(429).json({
			success: false,
			error: 'Too many requests, please try again later.',
		});
	}
};

/**
 * Auth rate limiting middleware for login/register endpoints
 */
export const authRateLimit = async (
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): Promise<void> => {
	try {
		// Use IP address as key, with fallback to 'unknown' if undefined
		const key = req.ip || 'unknown';
		await authRateLimiter.consume(key);
		next();
	} catch (rejRes: any) {
		const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
		res.set('Retry-After', String(secs));
		res.status(429).json({
			success: false,
			error: 'Too many authentication attempts, please try again later.',
		});
	}
};

/**
 * Review rate limiting middleware
 */
export const reviewRateLimit = async (
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): Promise<void> => {
	try {
		// Use user ID if available, otherwise fall back to IP address
		const key = req.user?.userId || req.ip || 'unknown';
		await reviewRateLimiter.consume(key);
		next();
	} catch (rejRes: any) {
		const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
		res.set('Retry-After', String(secs));
		res.status(429).json({
			success: false,
			error: 'Too many reviews created, please try again later.',
		});
	}
};
