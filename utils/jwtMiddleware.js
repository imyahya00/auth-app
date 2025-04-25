import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  
    if (!token) {
      return res.status(401).json({ statusCode: 401, message: "Access Denied: No Token" });
    }
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified; // store user data in req.user
      next();
    } catch (err) {
      res.status(401).json({ statusCode: 401, message: "Invalid Token" });
    }
  };