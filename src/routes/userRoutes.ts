import { Router, IRouter } from 'express';
import {
	getProfile,
	updateProfile,
	deleteAccount,
	getUserById,
	checkUsername,
	checkEmail,
	getAllUsers,
	searchUsers,
} from '@/controllers/userController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router: IRouter = Router();

// Public routes
router.get('/check-username/:username', checkUsername);
router.get('/check-email/:email', checkEmail);
router.get('/search', searchUsers);
router.get('/:id', optionalAuth, getUserById);

// Protected routes
router.get('/', authenticateToken, getProfile);
router.put('/', authenticateToken, updateProfile);
router.delete('/', authenticateToken, deleteAccount);

// Admin routes (would need admin middleware)
router.get('/admin/all', authenticateToken, getAllUsers);

export default router;
