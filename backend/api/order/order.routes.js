const express = require('express');
const asyncHandler = require('express-async-handler');
const { protect, isAdmin } = require('../../middleware/auth');
const {
  getOrders,
  getUserOrders,
  getOrder,
  addOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require('./order.controller');

const router = express.Router();

// @desc Fetch all orders
// @route GET /api/orders
// @access Private/Admin
router.get('/', protect, isAdmin, asyncHandler(getOrders));

// @desc logged in user orders
// @route GET /api/orders/myorders
// @access Private
router.get('/myorders', protect, asyncHandler(getUserOrders));

// @desc Fetch single order
// @route GET /api/orders/:id
// @access Private
router.get('/:id', protect, asyncHandler(getOrder));

// @desc Create new order
// @route POST /api/orders
// @access Private
router.post('/', protect, asyncHandler(addOrder));

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
router.put('/:id/pay', protect, asyncHandler(updateOrderToPaid));

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
router.put(
  '/:id/deliver',
  protect,
  isAdmin,
  asyncHandler(updateOrderToDelivered)
);

module.exports = router;
