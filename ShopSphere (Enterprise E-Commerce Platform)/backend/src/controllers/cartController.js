const User = require('../models/User');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  const user = await User.findById(req.user._id).populate('cart.product');
  const items = user.cart.filter((item) => item.product);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  res.json({ items, subtotal });
};

const addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  const product = await Product.findById(productId);
  if (!product || !product.isActive) {
    const error = new Error('Invalid product');
    error.statusCode = 400;
    throw error;
  }

  const user = await User.findById(req.user._id);
  const existing = user.cart.find((item) => item.product.toString() === productId);
  if (existing) existing.quantity += Number(quantity);
  else user.cart.push({ product: productId, quantity: Number(quantity) });
  await user.save();

  res.status(201).json({ message: 'Added to cart' });
};

const updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;
  const user = await User.findById(req.user._id);
  const item = user.cart.find((cartItem) => cartItem.product.toString() === productId);
  if (!item) {
    const error = new Error('Cart item not found');
    error.statusCode = 404;
    throw error;
  }

  if (Number(quantity) <= 0) {
    user.cart = user.cart.filter((cartItem) => cartItem.product.toString() !== productId);
  } else {
    item.quantity = Number(quantity);
  }
  await user.save();
  res.json({ message: 'Cart updated' });
};

const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const user = await User.findById(req.user._id);
  user.cart = user.cart.filter((item) => item.product.toString() !== productId);
  await user.save();
  res.json({ message: 'Removed from cart' });
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };
