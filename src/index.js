
import express from 'express'
const express = require('express')
const app = express()
const bycrypt = require('bctypt')

const react = require("React")

const users = []

app.set("view engine", 'ejs')
// app.use(express.urlencoded({ extended: false }))

app.get('/main', (req, res) => {
    res.render('./main.js')
})

// app.get('/login', (req, res) => {
//     res.render('./login.ejs')
// }) 

// app.listen(3000, () => {
//     console.log("port connected");
// })

app.listen(3000)