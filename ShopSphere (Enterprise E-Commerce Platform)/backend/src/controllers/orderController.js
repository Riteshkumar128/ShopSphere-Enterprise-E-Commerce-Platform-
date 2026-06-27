const Coupon = require('../models/Coupon');
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

const TAX_PERCENT = 0.18;
const SHIPPING_CHARGE = 49;

const placeOrder = async (req, res) => {
  const { addressId, couponCode, paymentMethod = 'cod' } = req.body;

  const user = await User.findById(req.user._id).populate('cart.product');
  const address = user.addresses.id(addressId) || user.addresses.find((a) => a.isDefault) || user.addresses[0];
  if (!address) {
    const error = new Error('Address required');
    error.statusCode = 400;
    throw error;
  }

  const items = user.cart.filter((item) => item.product).map((item) => ({
    product: item.product._id,
    name: item.product.name,
    quantity: item.quantity,
    price: item.product.price,
  }));

  if (!items.length) {
    const error = new Error('Cart is empty');
    error.statusCode = 400;
    throw error;
  }

  for (const item of items) {
    const product = await Product.findById(item.product);
    if (!product || product.stock < item.quantity) {
      const error = new Error(`${item.name} has insufficient stock`);
      error.statusCode = 400;
      throw error;
    }
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;

  if (couponCode) {
    const coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), isActive: true });
    if (coupon && coupon.expiresAt > new Date()) {
      if (coupon.type === 'percentage') discount = (subtotal * coupon.value) / 100;
      else discount = coupon.value;
      coupon.usedCount += 1;
      await coupon.save();
    }
  }

  const taxable = Math.max(subtotal - discount, 0);
  const tax = Number((taxable * TAX_PERCENT).toFixed(2));
  const total = Number((taxable + tax + SHIPPING_CHARGE).toFixed(2));

  const order = await Order.create({
    user: user._id,
    items,
    shippingAddress: {
      line1: address.line1,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country,
    },
    subtotal,
    discount,
    shippingCharge: SHIPPING_CHARGE,
    tax,
    total,
    paymentMethod,
    couponCode,
    paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
  });

  for (const item of items) {
    await Product.findByIdAndUpdate(item.product, { $inc: { stock: -item.quantity } });
  }

  user.cart = [];
  await user.save();

  res.status(201).json(order);
};

const myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
};

const updateOrderStatus = async (req, res) => {
  const { status, paymentStatus } = req.body;
  const order = await Order.findById(req.params.id);
  if (!order) {
    const error = new Error('Order not found');
    error.statusCode = 404;
    throw error;
  }

  if (status) order.status = status;
  if (paymentStatus) order.paymentStatus = paymentStatus;
  await order.save();
  res.json(order);
};

module.exports = { placeOrder, myOrders, updateOrderStatus };
