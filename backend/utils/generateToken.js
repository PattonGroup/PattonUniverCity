import jwt from 'jsonwebtoken';

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '10m',
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

export { generateToken, generateRefreshToken };
