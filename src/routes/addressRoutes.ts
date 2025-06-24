import { Router, IRouter } from 'express';
import {
	createAddress,
	getAddressById,
	updateAddress,
	deleteAddress,
	searchAddresses,
	getNearbyAddresses,
	calculateDistance,
	formatAddress,
} from '@/controllers/addressController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router: IRouter = Router();

// Public routes
router.get('/search', optionalAuth, searchAddresses);
router.get('/nearby', optionalAuth, getNearbyAddresses);
router.get('/:id', optionalAuth, getAddressById);
router.get('/:id/format', optionalAuth, formatAddress);
router.get(
	'/:address1Id/distance/:address2Id',
	optionalAuth,
	calculateDistance,
);

// Protected routes (admin/system use)
router.post('/', authenticateToken, createAddress);
router.put('/:id', authenticateToken, updateAddress);
router.delete('/:id', authenticateToken, deleteAddress);

export default router;
