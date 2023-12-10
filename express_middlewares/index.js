const express = require("express")
const {studentRouter}=require("./routes/student.router")
const {teacherRouter}=require("./routes/teacher.router")
const cors=require("cors")
// const fs = require("fs")
// const {timeLogger}=require("./moddlewares/timeLogger.middleware")
// const {watchMan}=require("./moddlewares/watchMan.middleware")
// const {addRoll}=require("./moddlewares/addStamp.middleware")
// const {logger}=require("./moddlewares/logger.middleware")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)



// app.use(watchMan) //security check
// app.use(timeLogger)
// app.use(express.json())
// // app.use(addRoll)
// app.use(logger)


// //using middleware

// // console.log("Hello from the middleware")
// // next()
// //    if(req.url==="/about"){
// //     next()
// //    }else{
// //     res.send("Cannot access this routes")
// //    }

// //Find a time difference



// //how to write basic routes
// app.get("/", (req, res) => {
//     console.log("Welcome Page")
//     res.send("Hello")
// })

// app.get("/contacts", (req, res) => {
//     res.send("Contact Page")
// })

// app.get("/about", (req, res) => {
//     res.send("About Page")
// })

// app.post("/newstudent",(req,res)=>{
//     console.log(req.body)
//     res.send("New student has been entered")
// })

// // app.use(timeLogger)

// app.get("/data", (req, res) => {
//     const data = fs.readFileSync("./dummy.txt", "utf-8")
//     res.send(data)
//     // res.send("Data will be sent")
// })



//student management system
app.get("/",(req,res)=>{
    res.send("home page")
})




app.listen(3500, () => {
    console.log("running at 3500")
})




// app.use((req,res,next)=>{
//     console.log("1")
//     next()
//     console.log("2")
// })

// app.use((req,res,next)=>{
//     console.log("3")
//     next()
//     console.log("4")

// })