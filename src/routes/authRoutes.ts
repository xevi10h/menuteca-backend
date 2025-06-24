import { Router, IRouter } from 'express';
import {
	register,
	login,
	googleAuth,
	getProfile,
	refreshToken,
	changePassword,
	setPassword,
} from '@/controllers/authController';
import { authenticateToken } from '@/middleware/auth';
import { authRateLimit } from '@/middleware/rateLimit';

const router: IRouter = Router();

// Public routes
router.post('/register', authRateLimit, register);
router.post('/login', authRateLimit, login);
router.post('/google', authRateLimit, googleAuth);

// Protected routes
router.get('/profile', authenticateToken, getProfile);
router.post('/refresh', authenticateToken, refreshToken);
router.post('/change-password', authenticateToken, changePassword);
router.post('/set-password', authenticateToken, setPassword);

export default router;
