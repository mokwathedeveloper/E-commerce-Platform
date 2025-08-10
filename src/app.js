require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const healthRouter = require('./routes/health');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const adminRouter = require('./routes/admin');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/admin', adminRouter);

module.exports = app;