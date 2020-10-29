const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  login,
  getUserProfile,
  updateUserProfile,
  register,
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} = require('./user.controller');
const { protect, isAdmin } = require('../../middleware/auth');

const router = express.Router();

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
router.post('/login', asyncHandler(login));

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
router.get('/profile', protect, asyncHandler(getUserProfile));

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
router.put('/profile', protect, asyncHandler(updateUserProfile));

// @desc Register a new user
// @route POST /api/users/register
// @access Public
router.post('/register', asyncHandler(register));

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
router.get('/', protect, isAdmin, asyncHandler(getUsers));

// @desc Get single user by id
// @route GET /api/users/:id
// @access Private/Admin
router.get('/:id', protect, isAdmin, asyncHandler(getUser));

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
router.delete('/:id', protect, isAdmin, asyncHandler(deleteUser));

// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin
router.put('/:id', protect, isAdmin, asyncHandler(updateUser));

module.exports = router;
