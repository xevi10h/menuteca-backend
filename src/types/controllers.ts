import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from './common';

// Tipos base para controllers
export type ControllerFunction<T = any> = (
	req: Request,
	res: Response<ApiResponse<T>>,
	next: NextFunction,
) => Promise<void> | void;

export type AsyncControllerFunction<T = any> = (
	req: Request,
	res: Response<ApiResponse<T>>,
	next: NextFunction,
) => void;

// Tipos específicos para diferentes respuestas
export interface AuthResponse {
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
