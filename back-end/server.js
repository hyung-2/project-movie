const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const config = require('./config')
const app = express()


const moviesRouter = require('./src/routes/movies')



mongoose.connect(`mongodb://127.0.0.1:27017/project-movie`)
.then(() => console.log('mongodb connected ...'))
.catch(e => console.log(`failed to connect mongodb: ${e}`))

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true
}




app.use(cors(corsOptions))
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/api/movies', moviesRouter)


app.listen(5201, () => {
  console.log('server is running on port 5201...')
})