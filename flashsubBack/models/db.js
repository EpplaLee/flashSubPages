const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://localhost:27017/flashsub");


module.exports = db;
