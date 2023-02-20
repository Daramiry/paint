const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
// import collection from './mongo'

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())


app.get("/Home", cors(), (req, res) =>{


})

app.post("/Login", async(req, res) =>{
    const {email, password} = req.body

    try{
        const check = await collectionfindOne({email:email, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})


app.post("/Signup", async(req, res) =>{
    const {email, password} = req.body

    const data = {
     email: email,
     password: password
    }

    try{
        const check = await collectionfindOne({email:email})

        if(check){
            res.json("notexist")
            await collection.insertMany([data])

        }
        else{
            res.json("exist")
            
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.listen(3000 , () => {
    console.log('connected to port 3000')
})