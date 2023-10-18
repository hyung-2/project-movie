const mongoose = require('mongoose')

const { Schema } = mongoose

const ResultSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    require: true,
  }
})


const Result = mongoose.model('Result', ResultSchema)
module.exports = Result