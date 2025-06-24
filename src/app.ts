import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';

// Import middleware
import { errorHandler, notFound } from '@/middleware/errorHandler';
import { rateLimit } from '@/middleware/rateLimit';

// Import routes
import authRoutes from '@/routes/authRoutes';
import userRoutes from '@/routes/userRoutes';
import cuisineRoutes from '@/routes/cuisineRoutes';
import addressRoutes from '@/routes/addressRoutes';

// Load environment variables
dotenv.config();

const app: Express = express();

// Security middleware
app.use(
	helmet({
		crossOriginEmbedderPolicy: false,
	}),
);

// CORS configuration
app.use(
	cors({
		origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
} else {
	app.use(morgan('combined'));
}

// Rate limiting
app.use(rateLimit);

// Health check endpoint
app.get('/health', (req, res) => {
	res.json({
		status: 'OK',
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || 'development',
		version: process.env.npm_package_version || '1.0.0',
	});
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cuisines', cuisineRoutes);
app.use('/api/addresses', addressRoutes);

// API documentation endpoint
app.get('/api', (req, res) => {
	res.json({
		name: 'Restaurant API',
		version: '1.0.0',
		description:
			'REST API for restaurant management with internationalization support',
		endpoints: {
			auth: '/api/auth',
			users: '/api/users',
			cuisines: '/api/cuisines',
			addresses: '/api/addresses',
			restaurants: '/api/restaurants',
			menus: '/api/menus',
			dishes: '/api/dishes',
			reviews: '/api/reviews',
		},
		documentation: {
			postman: '/api/docs/postman',
			openapi: '/api/docs/openapi',
		},
	});
});

// 404 handler
app.use('*', notFound);

// Global error handler
app.use(errorHandler);

export default app;
