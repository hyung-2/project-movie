const express = require('express')
const Result = require('../models/Result')
const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const config = require('../../config')


const router = express.Router()

// 장르별 선호도 가져오기
router.get('/', expressAsyncHandler( async(req, res, next) => {
    const results = await Result.find({})
    if(results.length === 0){
        res.status(404).json({code: 404, message: '데이터가 없습니다.'})
      }else{
        res.json({code: 200, results})
      }
    
}))

// 장르별 선호도 누적
router.put('/', expressAsyncHandler( async(req, res, next) => {
    const total = await Result.findOne({ id: 0 })
    const result = await Result.findOne({ id: req.body.id })

    if(!result){
        res.status(404).json({ code: 404, message: 'Result Not Found'})
    }else{
        total.id = total.id
        total.name = total.name
        total.likes = total.likes + 1

        result.id = result.id
        result.name = result.name
        result.likes = result.likes + 1

    }

    const updatedTotal = await total.save()
    const updatedResult = await result.save()
    
    res.json({
        code: 200,
        message: 'Result Updated',
        updatedTotal,
        updatedResult
    })
}))


module.exports = router