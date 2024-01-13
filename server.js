const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

//load dotenv 
dotenv.config({ path: './config/config.env' });
//connect to DB
connectDB();
//rest or instance object
const app = express();

// Use express.json() middleware to parse JSON data
app.use(express.json());

//routes require
const userRoute = require('./routes/userRoute')
//routes middlewares
app.use('/api/v1/user', userRoute)




const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server Is Running on ${PORT}`.green.bold);
});