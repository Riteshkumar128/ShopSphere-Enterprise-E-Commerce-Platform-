const express = require('express');
const { placeOrder, myOrders, updateOrderStatus } = require('../controllers/orderController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);
router.post('/', placeOrder);
router.get('/mine', myOrders);
router.patch('/:id/status', authorize('admin', 'super_admin', 'seller'), updateOrderStatus);

module.exports = router;
