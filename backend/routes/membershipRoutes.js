const express = require('express');
const router = express.Router();
const mc = require('../controllers/membershipController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', mc.getMemberships);
router.get('/:id', mc.getMembershipById);

// Admin routes
router.post('/', protect, admin, mc.createMembership);
router.put('/:id', protect, admin, mc.updateMembership);
router.delete('/:id', protect, admin, mc.deleteMembership);

module.exports = router;
