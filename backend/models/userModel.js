import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  role: {
    type: String,
    min: 1,
    required: true,
  },
  fname: {
    type: String,
    min: 1,
    required: true,
  },
  lname: {
    type: String,
    min: 1,
    required: true,
  },
  fullname: {
    type: String,
    min: 1,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userChats: [
    {
      chatid: String,
      chatWith: String,
    },
  ],
  email: String,
  address: String,
  contactNum: String,
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
