const express = require('express')
const app = express()
const path = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/books', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to the goose'))

app.listen(path, () => console.log(`listening at ${3000}`))
