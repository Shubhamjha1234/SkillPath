const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  order: { type: Number, required: true },
  youtube_url: { type: String, required: true },
  youtube_id: { type: String, required: true },
  duration_minutes: { type: Number, default: 20 },
  description: { type: String, required: true },
  key_takeaways: [{ type: String }],
  practice_task: {
    title: { type: String },
    description: { type: String },
    hint: { type: String }
  },
  resources: [{
    title: { type: String },
    url: { type: String }
  }],
  quiz: [{
    question: { type: String },
    options: [{ type: String }],
    answer_index: { type: Number }
  }]
}, { timestamps: true });

lessonSchema.index({ module_id: 1, order: 1 });

module.exports = mongoose.model('Lesson', lessonSchema);
