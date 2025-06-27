import { Router, IRouter } from 'express';
import {
	createDish,
	getMenuDishes,
	getDishById,
	updateDish,
	deleteDish,
	getDishesByCategory,
	searchDishes,
} from '@/controllers/dishController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router: IRouter = Router();

// Public routes
router.get('/search', optionalAuth, searchDishes);
router.get('/:id', optionalAuth, getDishById);

// Menu dish routes
router.get('/menu/:menuId', optionalAuth, getMenuDishes);

// Restaurant dish routes
router.get(
	'/restaurant/:restaurantId/category',
	optionalAuth,
	getDishesByCategory,
);

// Protected routes (restaurant owners only)
router.post('/menu/:menuId', authenticateToken, createDish);
router.put('/:id', authenticateToken, updateDish);
router.delete('/:id', authenticateToken, deleteDish);

export default router;
