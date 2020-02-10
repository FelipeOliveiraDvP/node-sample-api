const express = require('express');
const mongose = require('mongoose');
require('dotenv').config();

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
mongose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
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

// Models
const ProductionLine = require('./models/productionLine');

// Routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const productionLineRoutes = require('./routes/productionLine-routes');
app.use('/productionLine', productionLineRoutes);

// Exports
module.exports = app;