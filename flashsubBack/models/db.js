const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/flashsub");


module.exports = db;
