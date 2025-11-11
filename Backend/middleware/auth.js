 const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false,
        message: "No token, authorization denied" 
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: "No token, authorization denied" 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Tokens are issued by Authcontroller as { userId: <ObjectId> }
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid token format" 
      });
    }

    // Normalize to req.user.id for controllers
    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    console.error('Auth error:', err);
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token expired' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }
    return res.status(401).json({ 
      success: false,
      message: "Token is not valid" 
    });
  }
};
