const mongoose = require('mongoose');
const db = require('./db');

var movieSchema = new mongoose.Schema({
});

var Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
