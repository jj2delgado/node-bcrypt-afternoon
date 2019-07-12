require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authController')

const app = express()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.post('/auth.register', authCtrl.register)

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.listen(SERVER_PORT, () => {
    console.log('Listening on port', SERVER_PORT)
})


