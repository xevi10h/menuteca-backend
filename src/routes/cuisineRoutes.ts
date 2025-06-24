import { Router } from 'express';
import { CuisineController } from '@/controllers/cuisineController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router = Router();

// Public routes
router.get('/', optionalAuth, CuisineController.getAllCuisines);
router.get('/search', optionalAuth, CuisineController.searchCuisines);
router.get('/stats', CuisineController.getCuisineStats);
router.get('/:id', optionalAuth, CuisineController.getCuisineById);

// Admin routes (would need admin middleware)
router.post('/', authenticateToken, CuisineController.createCuisine);
router.put('/:id', authenticateToken, CuisineController.updateCuisine);
router.delete('/:id', authenticateToken, CuisineController.deleteCuisine);

export default router;
