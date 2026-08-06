const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  path_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Path', required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, required: true },
  total_lessons: { type: Number, default: 0 },
  estimated_minutes: { type: Number, default: 0 },
  icon: { type: String, default: 'BookOpen' }
}, { timestamps: true });

moduleSchema.index({ path_id: 1, order: 1 });

module.exports = mongoose.model('Module', moduleSchema);
