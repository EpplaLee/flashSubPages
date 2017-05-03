const mongoose = require('mongoose');
const db = require('./db');

var articleSchema = new mongoose.Schema({
});

var Article = mongoose.model('article', articleSchema);
module.exports = Article;
