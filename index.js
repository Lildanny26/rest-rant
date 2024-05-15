require('dotenv').config()
const express = require('express')
const app = express()

// Requirements & Declarations
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Body Parser
app.use(express.urlencoded({ extended: true }))

// The app using the file places file in controllers folder
app.use('/places', require('./controllers/places'))

//app.use(express.urlencoded({ extended: true }))

// Home page
app.get('/', (req, res) => {
    res.render('home')
})

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

// Always Have this last.
app.listen(process.env.PORT)