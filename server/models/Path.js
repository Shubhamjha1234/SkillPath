const mongoose = require('mongoose');

const pathSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Code' },
  total_lessons: { type: Number, default: 0 },
  estimated_hours: { type: Number, default: 0 },
  is_published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Path', pathSchema);
