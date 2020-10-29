const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  getProducts,
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
  addReviewToProduct,
  getTopProducts,
} = require('./product.controller');
const { protect, isAdmin } = require('../../middleware/auth');

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(getProducts));

// @desc Get top rated products
// @route GET /api/products/top
// @access Public
router.get('/top', asyncHandler(getTopProducts));

// @desc Create a product
// @route POST /api/products
// @access Private/Admin
router.post('/', protect, isAdmin, asyncHandler(addProduct));

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(getProduct));

// @desc Add new review to product
// @route POST /api/products/:id/reviews
// @access Private
router.post('/:id/reviews', protect, asyncHandler(addReviewToProduct));

// @desc Delete single product by id
// @route DELETE /api/products/:id
// @access Private/Admin
router.delete('/:id', protect, isAdmin, asyncHandler(deleteProduct));

// @desc Update single product by id
// @route PUT /api/products/:id
// @access Private/Admin
router.put('/:id', protect, isAdmin, asyncHandler(updateProduct));

module.exports = router;
