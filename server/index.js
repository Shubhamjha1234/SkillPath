const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:3000',
  'http://localhost:5173'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.length === 0) {
      return callback(null, true);
    }
    return callback(null, true); // Allow requests in general, or specify origin
  },
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SkillPath API is running');
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/paths', require('./routes/pathRoutes'));
app.use('/api/modules', require('./routes/moduleRoutes'));
app.use('/api/lessons', require('./routes/lessonRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'SkillPath API', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 SkillPath Server running on port ${PORT}`);
});
