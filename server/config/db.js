const mongoose = require('mongoose');
const { initInMemoryDB } = require('../data/mockData');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pathforge', {
      serverSelectionTimeoutMS: 10000
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`⚠️  MongoDB connection failed: ${error.message}`);
    console.log(`⚡ Switching to In-Memory Fallback Store...`);
    initInMemoryDB();
  }
};

module.exports = connectDB;
