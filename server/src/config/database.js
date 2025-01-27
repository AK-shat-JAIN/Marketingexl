const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
}

module.exports = connectDB;