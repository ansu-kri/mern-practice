const {User2}=require("./config/Moddle/moddle")
const express=require("express")
const {connection}=require("./config/db")
const app=express()
app.use(express.json())

app.get("/",async(req,res)=>{
    await User2.find()
    res.send("done")
})



app.post("/register",(req,res)=>{
    res.send("Registrated")
})

app.post("/login",(req,res)=>{
    res.send("LogIn")
})

app.listen(8080,()=>{
    try{
        connection
        console.log("connected")
    }catch(err){
        console.log("Trouble connecting")
        console.log(err)
    }
    console.log("running at port 8080")
})