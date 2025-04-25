import jwt from 'jsonwebtoken'

//const SECRET = process.env.JWT_SECRET; // In production, use process.env.JWT_SECRET

export const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }
  return jwt.sign({ userId }, secret, { expiresIn: '1d' });
};

export const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }
  return jwt.verify(token, SECRET);
};