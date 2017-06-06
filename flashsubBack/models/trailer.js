const mongoose = require('mongoose');
const db = require('./db');

var trailerSchema = new mongoose.Schema({
});

var Trailer = mongoose.model('trailer', trailerSchema);
module.exports = Trailer;
