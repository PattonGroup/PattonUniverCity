import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const currentUser = (req, res, next) => {
  if (!req.session.jwt) {
    next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    req.currentUser = payload;
  } catch (err) {}

  next();
};

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

const teacher = (req, res, next) => {
  if (req.user && req.user.isTeacher) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as a teacher');
  }
};

const developer = (req, res, next) => {
  if (req.user && req.user.isDeveloper) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as a developer');
  }
};

const student = (req, res, next) => {
  if (req.user && req.user.isStudent) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as a student');
  }
};

export { protect, admin, teacher, developer, student, currentUser };
