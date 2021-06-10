import express from 'express';
import {
  login,
  register,
  checkUser,
  logout,
} from '../controllers/userController.js';
import { currentUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(register);
router.route('/currentuser').get(currentUser, checkUser);
router.post('/login', login);
router.route('/logout').post(logout);

export default router;
