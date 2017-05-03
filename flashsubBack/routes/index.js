const express = require('express');
const TV = require('../models/tv');
const Movie = require('../models/movie');
const Article = require('../models/article');
const router = express.Router();

router.get('/news', function(req, res) {
  Article.find({}).exec(function(err, newsList) {
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      newsList: newsList
    })
  })
})
router.get('/news/:id', function(req, res) {
  let id = req.params.id
  Article.find({"_id": id}).exec(function(err, news) {
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      news: news[0]
    })
  })
})

router.get('/tv', function(req, res) {
  TV.find({}).exec(function(err, tvList) {
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      tvList: tvList
    })
  })
})
router.get('/tv/:id', function(req, res) {
  let id = req.params.id
  TV.find({"_id": id}).exec(function(err, tv) {
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      tv: tv[0]
    })
  })
})

router.get('/movie', function(req, res) {
  Movie.find({}).exec(function(err, movieList) {
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      movieList: movieList
    })
  })
})
router.get('/movie/:id', function(req, res) {
  let id = req.params.id
  Movie.find({"_id": id}).exec(function(err, movie) {
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      movie: movie[0]
    })
  })
})


module.exports = router;
