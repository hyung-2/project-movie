const express = require('express')
const Movie = require('../models/Movie')
const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const config = require('../../config')


const router = express.Router()
router.get('/', expressAsyncHandler(async (req, res, next) => {
  const movies = await Movie.find({})
  // console.log("무비" , movies)
  if(movies.length === 0){
    res.status(404).json({code: 404, message: '데이터가 없습니다.'})
  }else{
    res.json({code: 200, movies})
  }
}))

module.exports = router