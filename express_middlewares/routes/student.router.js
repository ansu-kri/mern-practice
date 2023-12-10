const express=require("express")

const studentRouter=express.Router()

studentRouter.get("/",(req,res)=>{
    res.send("All students")
})

studentRouter.post("/addstudents",(req,res)=>{
    console.log(req.body)
    res.send("add the student")
})

module.exports={
    studentRouter
}