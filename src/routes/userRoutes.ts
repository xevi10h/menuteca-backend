import { Router } from 'express';
import { UserController } from '@/controllers/userController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router = Router();

// Public routes
router.get('/check-username/:username', UserController.checkUsername);
router.get('/check-email/:email', UserController.checkEmail);
router.get('/search', UserController.searchUsers);
router.get('/:id', optionalAuth, UserController.getUserById);

// Protected routes
router.get('/', authenticateToken, UserController.getProfile);
router.put('/', authenticateToken, UserController.updateProfile);
router.delete('/', authenticateToken, UserController.deleteAccount);

// Admin routes (would need admin middleware)
router.get('/admin/all', authenticateToken, UserController.getAllUsers);

export default router;
