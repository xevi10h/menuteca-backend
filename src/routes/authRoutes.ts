import { Router } from 'express';
import { AuthController } from '@/controllers/authController';
import { authenticateToken } from '@/middleware/auth';
import { authRateLimit } from '@/middleware/rateLimit';

const router = Router();

// Public routes
router.post('/register', authRateLimit, AuthController.register);
router.post('/login', authRateLimit, AuthController.login);
router.post('/google', authRateLimit, AuthController.googleAuth);

// Protected routes
router.get('/profile', authenticateToken, AuthController.getProfile);
router.post('/refresh', authenticateToken, AuthController.refreshToken);
router.post(
	'/change-password',
	authenticateToken,
	AuthController.changePassword,
);
router.post('/set-password', authenticateToken, AuthController.setPassword);

export default router;
