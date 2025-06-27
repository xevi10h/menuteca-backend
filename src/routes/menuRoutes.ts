import { Router, IRouter } from 'express';
import {
	createMenu,
	getRestaurantMenus,
	getMenuById,
	updateMenu,
	deleteMenu,
	getAvailableMenus,
} from '@/controllers/menuController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router: IRouter = Router();

// Public routes
router.get('/:id', optionalAuth, getMenuById);

// Restaurant menu routes
router.get('/restaurant/:restaurantId', optionalAuth, getRestaurantMenus);
router.get(
	'/restaurant/:restaurantId/available',
	optionalAuth,
	getAvailableMenus,
);

// Protected routes (restaurant owners only)
router.post('/restaurant/:restaurantId', authenticateToken, createMenu);
router.put('/:id', authenticateToken, updateMenu);
router.delete('/:id', authenticateToken, deleteMenu);

export default router;
