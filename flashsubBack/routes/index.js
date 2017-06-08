const express = require('express')
const TV = require('../models/tv')
const Movie = require('../models/movie')
const Article = require('../models/article')
const Trailer = require('../models/trailer')
const marked = require('marked')
const router = express.Router()

router.get('/trailer', async function(req, res) {
  let limit = +req.query.limit
  let trailerList = await Trailer.find({}).sort({createTime: -1}).limit(limit).catch(err => {
    res.sendStatus(500)
  })
  res.header("Access-Control-Allow-Origin", "*")
  res.json({
    trailerList: trailerList
  })
})

router.get('/news',async function(req, res) {
  let page = +req.query.page
  let limit = +req.query.limit
  let skip = 0
  if(page !== 0) {
    skip = limit * (page - 1)
  } 
  let newsList = await Article.find({}).sort({createTime: -1}).limit(limit).skip(skip).catch(err => {
    res.sendStatus(500)
  })
  let allNum = await Article.find({}).count().catch(err => {
    res.sendStatus(500)
  })
  let allPage = Math.ceil(allNum / limit)
  res.header("Access-Control-Allow-Origin", "*")
  res.json({
    allPage: allPage,
    newsList: newsList
  })
})
router.get('/news/:id', function(req, res) {
  let id = req.params.id
  Article.find({"_id": id}).exec(function(err, news) {
    news[0].content = marked(news[0].content)
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      news: news[0]
    })
  })
})

router.get('/tv',async function(req, res) {
  let page = +req.query.page
  let limit = +req.query.limit
  let skip = 0
  if(page !== 0) {
    skip = limit * (page - 1)
  } 
  let tvList = await TV.find({}).sort({createTime: -1}).limit(limit).skip(skip).catch(err => {
    res.sendStatus(500)
  })
  let allNum = await TV.find({}).count().catch(err => {
    res.sendStatus(500)
  })
  let allPage = Math.ceil(allNum / limit)
      res.header("Access-Control-Allow-Origin", "*")
    res.json({
      allPage: allPage,
      tvList: tvList
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

router.get('/movie',async function(req, res) {
  let page = +req.query.page
  let limit = +req.query.limit
  let skip = 0
  if(page !== 0) {
    skip = limit * (page - 1)
  } 
  let movieList = await Movie.find({}).sort({createTime: -1}).limit(limit).skip(skip).catch(err => {
    res.sendStatus(500)
  })
  let allNum = await Movie.find({}).count().catch(err => {
    res.sendStatus(500)
  })
  let allPage = Math.ceil(allNum / limit)
      res.header("Access-Control-Allow-Origin", "*")
    res.json({
      allPage: allPage,
      movieList: movieList
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
