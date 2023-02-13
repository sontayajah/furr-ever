const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const dbConnection = require('./db')

// Create express app
const app = express();

// Connect to database
dbConnection()

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors());

// Routes
app.use('/', require('./routes/index'))
app.use('/adopt', require('./routes/adopt'))
app.use('/pets', require('./routes/pets'))
app.use('/lost-pets', require('./routes/lost-pets'))
app.use('/donate', require('./routes/donate'))
app.use('/contact-us', require('./routes/contact-us'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})