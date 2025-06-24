import { Request, Response, NextFunction } from 'express';
import { verifyToken, extractTokenFromHeader } from '@/utils/auth';
import { JwtPayload } from '@/types/common';
import { ApiResponse } from '@/types/common';

// Extend Express Request interface to include user data
declare global {
	namespace Express {
		interface Request {
			user?: JwtPayload;
		}
	}
}

/**
 * Middleware to authenticate JWT tokens
 */
export const authenticateToken = (
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): void => {
	try {
		const token = extractTokenFromHeader(req.headers.authorization);

		if (!token) {
			res.status(401).json({
				success: false,
				error: 'Access token is required',
			});
			return;
		}

		const decoded = verifyToken(token);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(401).json({
			success: false,
			error: 'Invalid or expired token',
		});
	}
};

/**
 * Middleware to optionally authenticate JWT tokens (doesn't fail if no token)
 */
export const optionalAuth = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	try {
		const token = extractTokenFromHeader(req.headers.authorization);

		if (token) {
			const decoded = verifyToken(token);
			req.user = decoded;
		}

		next();
	} catch (error) {
		// Token is invalid but we don't fail, just continue without user
		next();
	}
};

/**
 * Middleware to check if user is the owner of a restaurant
 */
export const checkRestaurantOwnership = async (
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				success: false,
				error: 'Authentication required',
			});
			return;
		}

		const restaurantId = req.params.id || req.params.restaurantId;
		if (!restaurantId) {
			res.status(400).json({
				success: false,
				error: 'Restaurant ID is required',
			});
			return;
		}

		// This will be implemented in the restaurant service
		// For now, we'll add the restaurant ID to the request for later verification
		req.params.restaurantId = restaurantId;
		next();
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error verifying restaurant ownership',
		});
	}
};
