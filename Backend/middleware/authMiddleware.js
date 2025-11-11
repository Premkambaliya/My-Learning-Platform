const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No authorization header" });
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
  
  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: "Token expired" });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    res.status(401).json({ success: false, message: "Authentication failed" });
  }
};

module.exports = authMiddleware;
