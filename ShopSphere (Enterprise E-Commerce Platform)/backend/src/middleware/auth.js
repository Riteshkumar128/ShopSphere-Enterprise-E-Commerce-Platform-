const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, _res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    const error = new Error('Unauthorized');
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select('-password');
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 401;
    throw error;
  }
  req.user = user;
  next();
};

const authorize = (...roles) => (req, _res, next) => {
  if (!roles.includes(req.user.role)) {
    const error = new Error('Forbidden');
    error.statusCode = 403;
    throw error;
  }
  next();
};

module.exports = { protect, authorize };
