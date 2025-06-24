import { Router } from 'express';
import { AddressController } from '@/controllers/addressController';
import { authenticateToken, optionalAuth } from '@/middleware/auth';

const router = Router();

// Public routes
router.get('/search', optionalAuth, AddressController.searchAddresses);
router.get('/nearby', optionalAuth, AddressController.getNearbyAddresses);
router.get('/:id', optionalAuth, AddressController.getAddressById);
router.get('/:id/format', optionalAuth, AddressController.formatAddress);
router.get(
	'/:address1Id/distance/:address2Id',
	optionalAuth,
	AddressController.calculateDistance,
);

// Protected routes (admin/system use)
router.post('/', authenticateToken, AddressController.createAddress);
router.put('/:id', authenticateToken, AddressController.updateAddress);
router.delete('/:id', authenticateToken, AddressController.deleteAddress);

export default router;
