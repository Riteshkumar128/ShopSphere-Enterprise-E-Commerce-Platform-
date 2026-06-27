const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, authorize('admin', 'super_admin', 'seller'), createProduct);
router.put('/:id', protect, authorize('admin', 'super_admin', 'seller'), updateProduct);
router.delete('/:id', protect, authorize('admin', 'super_admin'), deleteProduct);

module.exports = router;
