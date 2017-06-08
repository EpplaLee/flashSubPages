const mongoose = require('mongoose');
const db = require('./db');

var articleSchema = new mongoose.Schema({
    content: String
});

var Article = mongoose.model('article', articleSchema);
module.exports = Article;
