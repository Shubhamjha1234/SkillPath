const mongoose = require('mongoose');
const { initInMemoryDB } = require('../data/mockData');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pathforge', {
      serverSelectionTimeoutMS: 2000 // Quick fallback if local MongoDB is not running
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`⚠️  Local MongoDB not running (${error.message}).`);
    console.log(`⚡ Switching to In-Memory Fallback Store (Full 67 Lessons loaded)...`);
    initInMemoryDB();
  }
};

module.exports = connectDB;
