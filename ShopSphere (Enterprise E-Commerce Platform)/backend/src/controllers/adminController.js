const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

const dashboardStats = async (_req, res) => {
  const [users, products, orders, revenueAgg] = await Promise.all([
    User.countDocuments(),
    Product.countDocuments(),
    Order.countDocuments(),
    Order.aggregate([{ $match: { paymentStatus: { $in: ['paid', 'pending'] } } }, { $group: { _id: null, total: { $sum: '$total' } } }]),
  ]);

  res.json({
    users,
    products,
    orders,
    revenue: revenueAgg[0]?.total || 0,
  });
};

module.exports = { dashboardStats };
