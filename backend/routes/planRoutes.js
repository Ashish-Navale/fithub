const express = require('express');
const router = express.Router();
const pc = require('../controllers/planController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', pc.getPlans);
router.get('/:id', pc.getPlanById);
router.post('/', protect, admin, pc.createPlan);
router.put('/:id', protect, admin, pc.updatePlan);
router.delete('/:id', protect, admin, pc.deletePlan);

module.exports = router;
