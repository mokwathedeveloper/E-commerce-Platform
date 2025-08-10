require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const healthRouter = require('./routes/health');
const authRouter = require('./routes/auth');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/api/auth', authRouter);

module.exports = app;