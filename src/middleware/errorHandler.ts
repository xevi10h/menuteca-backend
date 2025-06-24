import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ApiResponse } from '@/types/common';

export class AppError extends Error {
	public statusCode: number;
	public isOperational: boolean;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

/**
 * Global error handler middleware
 */
export const errorHandler = (
	error: Error | AppError,
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): void => {
	let statusCode = 500;
	let message = 'Internal server error';

	// Handle AppError instances
	if (error instanceof AppError) {
		statusCode = error.statusCode;
		message = error.message;
	}

	// Handle validation errors
	else if (error.name === 'ValidationError') {
		statusCode = 400;
		message = 'Validation error';
	}

	// Handle JWT errors
	else if (error.name === 'JsonWebTokenError') {
		statusCode = 401;
		message = 'Invalid token';
	}

	// Handle JWT expiration
	else if (error.name === 'TokenExpiredError') {
		statusCode = 401;
		message = 'Token expired';
	}

	// Handle Supabase errors
	else if (error.message.includes('duplicate key value')) {
		statusCode = 409;
		message = 'Resource already exists';
	}

	// Handle foreign key constraint errors
	else if (error.message.includes('foreign key constraint')) {
		statusCode = 400;
		message = 'Invalid reference to related resource';
	}

	// Log error in development
	if (process.env.NODE_ENV === 'development') {
		console.error('Error:', error);
	}

	res.status(statusCode).json({
		success: false,
		error: message,
		...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
	});
};

/**
 * Handle 404 errors for unknown routes
 */
export const notFound = (
	req: Request,
	res: Response<ApiResponse>,
	next: NextFunction,
): void => {
	const error = new AppError(`Route ${req.originalUrl} not found`, 404);
	next(error);
};

/**
 * Async error wrapper to catch async errors in route handlers
 */
export const asyncHandler = (
	fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
): RequestHandler => {
	return (req: Request, res: Response, next: NextFunction): void => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};
