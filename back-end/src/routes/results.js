const express = require('express')
const Result = require('../models/Result')
const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const config = require('../../config')


const router = express.Router()

// 장르별 선호도 가져오기
router.get('/', expressAsyncHandler( async(req, res, next) => {

}))

// 장르별 선호도 누적
router.put('/', expressAsyncHandler( async(req, res, next) => {
    
}))


module.exports = router