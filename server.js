const express = require('express')
const app = express()
const bycrypt = require('bctypt')

const users = []

app.set("view engine", 'ejs')
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.render('index.ejs', {name: users})
})

app.get('/login', (req, res) => {
    res.render('/login.ejs')
}) 

app.listen(3001)