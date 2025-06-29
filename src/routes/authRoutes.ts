import { Router, IRouter } from 'express';
import {
	register,
	login,
	googleAuth,
	getProfile,
	refreshToken,
	changePassword,
	setPassword,
	sendPasswordResetCode,
	verifyPasswordResetCode,
	resetPasswordWithToken,
} from '@/controllers/authController';
import { authenticateToken } from '@/middleware/auth';
import { authRateLimit } from '@/middleware/rateLimit';

const router: IRouter = Router();

// Public routes
router.post('/register', authRateLimit, register);
router.post('/login', authRateLimit, login);
router.post('/google', authRateLimit, googleAuth);

// Password reset flow
router.post('/send-reset-code', authRateLimit, sendPasswordResetCode);
router.post('/verify-reset-code', authRateLimit, verifyPasswordResetCode);
router.post('/reset-password', authRateLimit, resetPasswordWithToken);

// Protected routes
router.get('/profile', authenticateToken, getProfile);
router.post('/refresh', authenticateToken, refreshToken);
router.post('/change-password', authenticateToken, changePassword);
router.post('/set-password', authenticateToken, setPassword);

export default router;
