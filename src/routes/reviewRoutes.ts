import { Router, IRouter } from 'express';
import {
	createReview,
	getRestaurantReviews,
	getMyReviews,
	updateReview,
	deleteReview,
	addRestaurantResponse,
	getReviewById,
	getReviewStats,
	searchReviews,
	getRecentReviews,
	getTopRatedReviews,
	removeRestaurantResponse,
} from '@/controllers/reviewController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';
import { reviewRateLimit } from '@/middleware/rateLimit';

const router: IRouter = Router();

// Public routes
router.get('/search', optionalAuth, searchReviews);
router.get('/recent', optionalAuth, getRecentReviews);
router.get('/top-rated', optionalAuth, getTopRatedReviews);
router.get('/:id', optionalAuth, getReviewById);

// Restaurant review routes
router.get('/restaurant/:restaurantId', optionalAuth, getRestaurantReviews);
router.get('/restaurant/:restaurantId/stats', getReviewStats);

// Protected routes
router.get('/user/mine', authenticateToken, getMyReviews);
router.post(
	'/restaurant/:restaurantId',
	authenticateToken,
	reviewRateLimit,
	createReview,
);
router.put('/:id', authenticateToken, updateReview);
router.delete('/:id', authenticateToken, deleteReview);

// Restaurant owner routes
router.post('/:id/response', authenticateToken, addRestaurantResponse);
router.delete('/:id/response', authenticateToken, removeRestaurantResponse);

export default router;
