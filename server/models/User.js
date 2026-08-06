const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password_hash: { type: String },
  avatar_url: { type: String, default: '' },
  auth_provider: { type: String, enum: ['email', 'google'], default: 'email' },
  experience_level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
  goal: { type: String, enum: ['job', 'projects', 'fun', 'freelancing'], default: 'job' },
  time_commitment: { type: String, enum: ['30min', '1hr', '2hr'], default: '1hr' },
  onboarding_completed: { type: Boolean, default: false },
  last_login: { type: Date, default: Date.now }
}, { timestamps: true });

userSchema.methods.matchPassword = async function(enteredPassword) {
  if (!this.password_hash) return false;
  return await bcrypt.compare(enteredPassword, this.password_hash);
};

userSchema.pre('save', async function(next) {
  if (!this.isModified('password_hash') || !this.password_hash) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password_hash = await bcrypt.hash(this.password_hash, salt);
  next();
});

module.exports = mongoose.model('User', userSchema);
