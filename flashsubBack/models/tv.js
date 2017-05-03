const mongoose = require('mongoose');
const db = require('./db');

var tvSchema = new mongoose.Schema({
});

var TV = mongoose.model('tv', tvSchema);
module.exports = TV;
