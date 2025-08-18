const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB is connected successfully...'))
  .catch(err => console.error(`❌ MongoDB connection failed: ${err.message}`));

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
