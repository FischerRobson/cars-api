const express = require('express')

const app = express()

const mongoose = require('mongoose')

app.use(express.json())

const requireDir = require('require-dir')
requireDir('./src/models')



mongoose.connect(
    'mongodb://localhost:27017/carsapi',
    { useNewUrlParser: true})

requireDir('./src/models')


app.use('/', require('./src/routes'))

app.listen(3001)