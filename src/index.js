const express = require('express')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);


const path = require('path')
const cors = require('cors')

const app = express()



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
})


app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, "..", "uploads")))

app.use(require('./routes'))


module.exports = app