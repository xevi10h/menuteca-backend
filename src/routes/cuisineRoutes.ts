import { Router, IRouter } from 'express';
import {
	getAllCuisines,
	getCuisineById,
	createCuisine,
	updateCuisine,
	deleteCuisine,
	searchCuisines,
	getCuisineStats,
} from '@/controllers/cuisineController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router: IRouter = Router();

// Public routes
router.get('/', optionalAuth, getAllCuisines);
router.get('/search', optionalAuth, searchCuisines);
router.get('/stats', getCuisineStats);
router.get('/:id', optionalAuth, getCuisineById);

// Admin routes (would need admin middleware)
router.post('/', authenticateToken, createCuisine);
router.put('/:id', authenticateToken, updateCuisine);
router.delete('/:id', authenticateToken, deleteCuisine);

export default router;
