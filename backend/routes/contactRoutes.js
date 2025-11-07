const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', sendMessage);
router.get('/', protect, admin, getMessages);

module.exports = router;
