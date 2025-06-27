import { Router, IRouter } from 'express';
import {
	createRestaurant,
	getAllRestaurants,
	getRestaurantById,
	updateRestaurant,
	deleteRestaurant,
	searchRestaurants,
	getMyRestaurants,
	updateRestaurantRating,
} from '@/controllers/restaurantController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router: IRouter = Router();

// Public routes
router.get('/', optionalAuth, getAllRestaurants);
router.get('/search', optionalAuth, searchRestaurants);
router.get('/:id', optionalAuth, getRestaurantById);

// Protected routes
router.post('/', authenticateToken, createRestaurant);
router.put('/:id', authenticateToken, updateRestaurant);
router.delete('/:id', authenticateToken, deleteRestaurant);

// Owner routes
router.get('/owner/mine', authenticateToken, getMyRestaurants);

// Internal routes (for system use)
router.post('/:id/update-rating', updateRestaurantRating);

export default router;
