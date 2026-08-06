const jwt = require('jsonwebtoken');
const User = require('../models/User');
const mockData = require('../data/mockData');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'pathforge_jwt_secret_key_super_secure_2026');

      if (mockData.isInMemory) {
        let user = mockData.mockUsers.find(u => u._id.toString() === decoded.id.toString());
        if (!user) {
          user = { _id: decoded.id, name: 'Learner', email: 'user@pathforge.com', onboarding_completed: true };
        }
        req.user = user;
        return next();
      }

      req.user = await User.findById(decoded.id).select('-password_hash');
      if (!req.user) {
        return res.status(401).json({ error: 'User not found' });
      }
      return next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token provided' });
  }
};

module.exports = { protect };
