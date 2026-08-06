const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  current_streak: { type: Number, default: 1 },
  longest_streak: { type: Number, default: 1 },
  last_activity_date: { type: Date, default: Date.now },
  activity_dates: [{ type: String }] // Store dates as YYYY-MM-DD
}, { timestamps: true });

module.exports = mongoose.model('Streak', streakSchema);
