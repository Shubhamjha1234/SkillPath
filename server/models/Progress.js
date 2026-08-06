const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  path_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Path', required: true },
  is_completed: { type: Boolean, default: true },
  completed_at: { type: Date, default: Date.now }
}, { timestamps: true });

progressSchema.index({ user_id: 1, lesson_id: 1 }, { unique: true });
progressSchema.index({ user_id: 1, path_id: 1 });
progressSchema.index({ user_id: 1, module_id: 1 });

module.exports = mongoose.model('Progress', progressSchema);
