import { generateToken } from '../utils/generateToken.js';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    req.session = { jwt: generateToken(user._id, user.email) };
    res.json({
      _id: user._id,
      firstName: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Sign out
// @route   POST /api/user/signout
// @access  Private

const logout = (req, res) => {
  req.session = null;
  res.send({ msg: 'Successfully logged out' });
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName, fullName, userName } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    // make error handling folder for all possible type of erros
    throw new Error('Email in use');
  }
  const user = await User.create({
    password,
    email,
    firstName,
    lastName,
    fullName,
    userName,
    cart: { items: [], total_price: 0 },
    isAdmin: true,
  });
  if (user) {
    await user.save();
    // Store it on session object
    req.session = {
      jwt: generateToken(user._id, user.email),
    };
    res.status(201).json({
      _id: user._id,
      fullname: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const checkUser = asyncHandler(async (req, res) => {
  res.send({ currentUser: req.session.jwt || null });
});

export { login, checkUser, logout, register };
