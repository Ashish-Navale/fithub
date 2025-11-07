const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { protect, admin } = require('../middleware/authMiddleware');
const tc = require('../controllers/trainerController');

router.get('/', tc.getTrainers);
router.get('/:id', tc.getTrainerById);

// admin operations
router.post('/', protect, admin, upload.single('image'), tc.createTrainer);
router.put('/:id', protect, admin, upload.single('image'), tc.updateTrainer);
router.delete('/:id', protect, admin, tc.deleteTrainer);

module.exports = router;
