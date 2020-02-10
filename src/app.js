const express = require('express');
const mongose = require('mongoose');
require('dotenv').config();

// Database
mongose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// App
const app = express();

// Models
const ProductionLine = require('./models/productionLine');

// Routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;