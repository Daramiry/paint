const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/paint")
.then(() => {
    console.log("mongo connected")
})
.catch(() => {
    console.log('failed to connect')
})

const SignSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
})

const collection = new mongoose.model("signup-info", SignSchema)

module.exports = collection