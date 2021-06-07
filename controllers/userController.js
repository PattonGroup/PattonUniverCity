import User from '../models/userModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
  const accesstoken = createAccessToken({ id: user._id });
  // const refreshtoken = createRefreshToken({ id: user._id });

  res.json({ accesstoken, msg: 'Logged in' });
});

const logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send({ msg: 'Successfully logged out' });
};

const register = async (req, res) => {
  try {
    const { email, username, password, fname, lname, fullname } = req.body;
    await User.findOne({ username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send({ msg: 'User already exists' });
      if (!doc) {
        const hashedPassword = await bcrypt.hash(password, 10);
        if (username === 'admin') {
          const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: username,
            password: hashedPassword,
            email: email,
            fname: fname,
            lname: lname,
            fullname: fullname,
            cart: { items: [], total_price: 0 },
            isAdmin: true,
          });
          await newUser.save();
          res.send({ msg: 'User created' });
        } else {
          const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: username,
            password: hashedPassword,
            email: email,
            fname: fname,
            lname: lname,
            fullname: fullname,
            cart: { items: [], total_price: 0 },
            isAdmin: false,
          });
          await newUser.save();
          res.send({ msg: 'User created' });
        }
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: err.message });
  }
};

const currentUser = async (req, res) => {
  res.send({ currentUser: req.currentUser || null });
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

const userCtrl = {
  login,
  currentUser,
  logout,
  register,
};

module.exports = userCtrl;
