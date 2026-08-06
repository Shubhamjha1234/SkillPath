const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Streak = require('../models/Streak');
const { protect } = require('../middleware/authMiddleware');
const mockData = require('../data/mockData');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'pathforge_jwt_secret_key_super_secure_2026', {
    expiresIn: '30d',
  });
};

// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    if (mockData.isInMemory) {
      const newUser = {
        _id: `user-${Date.now()}`,
        name,
        email,
        experience_level: 'beginner',
        goal: 'job',
        time_commitment: '1hr',
        onboarding_completed: false
      };
      mockData.mockUsers.push(newUser);
      return res.status(201).json({
        ...newUser,
        token: generateToken(newUser._id)
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const user = await User.create({ name, email, password_hash: password });
    await Streak.create({ user_id: user._id, current_streak: 1, longest_streak: 1, last_activity_date: new Date(), activity_dates: [new Date().toISOString().split('T')[0]] });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      experience_level: user.experience_level,
      goal: user.goal,
      time_commitment: user.time_commitment,
      onboarding_completed: user.onboarding_completed,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (mockData.isInMemory) {
      let user = mockData.mockUsers.find(u => u.email === email);
      if (!user) {
        // Auto-create test user if logging in with test credentials
        user = {
          _id: `user-${Date.now()}`,
          name: email.split('@')[0],
          email,
          experience_level: 'beginner',
          goal: 'job',
          time_commitment: '1hr',
          onboarding_completed: true
        };
        mockData.mockUsers.push(user);
      }
      return res.json({
        ...user,
        token: generateToken(user._id)
      });
    }

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        experience_level: user.experience_level,
        goal: user.goal,
        time_commitment: user.time_commitment,
        onboarding_completed: user.onboarding_completed,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/auth/me
router.get('/me', protect, async (req, res) => {
  res.json(req.user);
});

// @route   PUT /api/auth/onboarding
router.put('/onboarding', protect, async (req, res) => {
  try {
    const { experience_level, goal, time_commitment } = req.body;

    if (mockData.isInMemory) {
      const user = mockData.mockUsers.find(u => u._id.toString() === req.user._id.toString());
      if (user) {
        if (experience_level) user.experience_level = experience_level;
        if (goal) user.goal = goal;
        if (time_commitment) user.time_commitment = time_commitment;
        user.onboarding_completed = true;
        return res.json({ ...user, token: generateToken(user._id) });
      }
    }

    const user = await User.findById(req.user._id);
    if (user) {
      if (experience_level) user.experience_level = experience_level;
      if (goal) user.goal = goal;
      if (time_commitment) user.time_commitment = time_commitment;
      user.onboarding_completed = true;
      await user.save();
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        experience_level: user.experience_level,
        goal: user.goal,
        time_commitment: user.time_commitment,
        onboarding_completed: user.onboarding_completed,
        token: generateToken(user._id)
      });
    }
    res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
