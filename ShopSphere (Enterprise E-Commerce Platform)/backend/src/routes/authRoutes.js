const express = require('express');
const { body } = require('express-validator');
const { register, login, refresh, logout, me } = require('../controllers/authController');
const validateRequest = require('../middleware/validateRequest');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post(
  '/register',
  [body('name').notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 })],
  validateRequest,
  register
);
router.post('/login', [body('email').isEmail(), body('password').notEmpty()], validateRequest, login);
router.post('/refresh', [body('refreshToken').notEmpty()], validateRequest, refresh);
router.post('/logout', logout);
router.get('/me', protect, me);

module.exports = router;
