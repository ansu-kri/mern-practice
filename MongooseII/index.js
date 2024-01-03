const express = require("express")
const { connection, HeroModel } = require("./db")
require('dotenv').config()


const app = express()
app.use(express.json())

app.get("/", (req, res) => {

    res.send("Welcome Page")

})
app.get("/heroes", async (req, res) => {
    // res.send("Data of all the super heroes")
    let query = req.query
    // const power=req.query.power
    try {
        const heros = await HeroModel.find(query)
        res.send(heros)
    } catch (err) {
        console.log(err)
        res.send({ "err": "something wrong" })
    }

})

app.patch("/edithero/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {

        await HeroModel.findIdAndUpadte({ _id: ID }, payload)
        res.send(`update the hero data whose id is ${ID}`)
    } catch (err) {
        console.log(err)
        res.send({ "err": "something wrong" })
    }
})

app.delete("/edithero/:id",async(req,res)=>{
    const ID=req.params.id
    try{
        await HeroModel.findByAndDelete({_id:ID})
            res.send(`delete the hero data whose is is ${ID}`)

        
    }catch(err){
        console.log(err)
        res.send({"err":"Something wrong"})
    }
})


app.post("/addhero", async (req, res) => {
    const data = req.body
    try {
        const hero = new HeroModel(data)
        await hero.save()
        console.log(hero)
        res.send({message:"Added the hero",hero})
    } catch (err) {

        res.send({ "err": "something wrong" })
    }
})

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log("error while connecting to db")
        console.log(err)
    }
    console.log(`Server is running at port ${process.env.port}`)

})