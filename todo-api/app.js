const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/todoapi'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('DB Connected...')
})

app.use(express.json())

const todoRouter = require('./routes/todo')
app.use('/todos',todoRouter)

app.listen(3000, () => {
    console.log('Server Running...')
})