// Create a server
const express = require('express');
require('dotenv').config(); // Load environment variables from .env file
const connectDB = require('./config/database');
const formRouter = require('./routes/formRouter');

const app = express();
app.use(express.json());

app.use('/', formRouter);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB().then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log('Server is running on port 3000');
    });    
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
})
