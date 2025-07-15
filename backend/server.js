const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes and middleware
const urlRoutes = require('./routes/url.routes');
const loggerMiddleware = require('./middleware/logger');

const app = express();

// Use middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/affordmed', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// FIXED: Mount the URL routes under /api/shorturls
app.use('/api/shorturls', urlRoutes);

// Add a catch-all route for debugging
app.use('*', (req, res) => {
  console.log(`Unhandled route: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Route not found' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});