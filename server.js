const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path: './config/config.env' });

// Connect to database
connectDB();

//Routes file
const bootcamps = require('./routes/bootcamps');


const app = express();

//Body Parser
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount routes
app.use('/api/v1/bootcamps', bootcamps);



const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));