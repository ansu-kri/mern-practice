const express = require("express")
const fs = require("fs")



// console.log(express);

const app = express();

app.use(express.json()) //middleware

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/alldata",(req,res)=>{
    const data =fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    console.log(parsed_data)
    // res.send(parsed_data)
    res.send("data is in terminal")
})

app.get("/allstudents",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    console.log(parsed_data.student)
    res.send("student data is in terminal")
})

app.post("/addstudent",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    //adding the new student
    parsed_data.student.push(req.body)
    // console.log(parsed_data)

    //write it in the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))


    res.send("database updated")
})

app.delete("/deletstudent",(req,res)=>{
    
})










// app.get("/data",(req,res)=>{
//     res.end("Data will be sent")
// })

// app.post("/addData",(req,res)=>{
//     console.log(req.body)
//     res.end("Data has been recorded")
// })





app.listen(3500,()=>{
    console.log("Running at port 3500")
})