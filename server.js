const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodypar = require('body-parser')
const cors = require('cors')
const path = require('path')

app.use(bodypar.json())
app.use(bodypar.urlencoded({ extended: false }))

app.use(express.static('public'))
// app.use('/images', express.static(path.join(__dirname, 'public')))

app.use(cors())

//---------------------------------------------- MongoDB ------------------------------------------------
const MongoURI = 'mongodb://localhost:27017/avtosalon'
mongoose
    .connect(MongoURI, {
        useNewUrlParser: true,
    })
    .then(res => {
        console.log(`Database Connected`)
    })

// Mowina

app.use('/', require('./router/car'))
app.use('/client', require('./router/xaridRoutes'))
app.use('/admin', require('./router/authRoutes'))

app.listen(PORT, console.log(`run server ${PORT} port`))
