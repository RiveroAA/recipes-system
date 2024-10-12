const mongoose = require('mongoose');

async function dbconnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/recipes-db');
        console.log('Connected to database.');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
}

module.exports = dbconnect;