require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const healthRouter = require('./routes/health');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRouter);

module.exports = app;
