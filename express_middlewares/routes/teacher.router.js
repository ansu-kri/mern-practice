const express=require("express")

const teacherRouter=express.Router()



teacherRouter.get("/",(req,res)=>{
    res.send("All teachers")
})

teacherRouter.post("/addteachers",(req,res)=>{
    console.log(req.body)
    res.send("add the teacher")
})

module.exports={
    teacherRouter
}