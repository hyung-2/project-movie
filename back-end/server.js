const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const config = require('./config')

mongoose.connect(config.MONGODB_URL)
.then(() => console.log('mongodb connected ...'))
.catch(e => console.log(`failed to connect mongodb: ${e}`))

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true
}








app.listen(5201, () => {
  console.log('server is running on port 5201...')
})