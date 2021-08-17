import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    min: 1,
    required: true,
  },
  lastName: {
    type: String,
    min: 1,
    required: true,
  },
  fullName: {
    type: String,
    min: 1,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: String,
  contactName: String,
  isAdmin: Boolean,
  isTeacher: Boolean,
  isStudent: Boolean,
  isDeveloper: Boolean,
  cart: Object,
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

User.createIndexes();

export default User;
