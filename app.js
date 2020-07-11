// const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const router = require('./src/routers/router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
// app.set("templates", "./src/templates/partials")
// app.set("views", "./src/templates/error")
app.set("views", "./src/templates")
app.set("view engine", "hbs")
// app.engine('html', require('hbs').__express)

// hbs.registerPartials('partials' + '../templates/partials');

app.use('/', router)

// not found page render
app.use((req, res, next) => {
    res.status(404).render('error/404.hbs')
    // res.status(500).render('404.hbs')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port http://localhost:3000')
})