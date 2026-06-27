const express = require('express');
const { dashboardStats } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard', protect, authorize('admin', 'super_admin'), dashboardStats);

module.exports = router;
