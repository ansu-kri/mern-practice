const { USerModel } = require("./config/models/User.model")
const express = require("express")
const { connection } = require("./config/db")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    // await USerModel.find()
    res.send("Home Page")
})



app.post("/register", async (req, res) => {
    const payload = req.body
    try {
        const user = new USerModel(payload)
        await user.save() //while inserting one
        res.send("Registered")
    } catch (er) {
        res.send("Error in user")
        console.log(er)
    }
    res.send("Registrated")
})

app.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await USerModel.find({ email, pass })
        const token = jwt.sign({ course: 'backend' }, 'masai');
        if (user.length > 0) {
            res.send({ "msg": "Login Successfull", "token": token })
        } else {
            res.send("wrong Pass")
        }
        // console.log(user)
        // res.send("working on it")
    } catch (er) {
        res.send("Some went wrong")
        console.log(er)
    }
    res.send("LogIn")
})

app.get("/about", (req, res) => {
    res.send("About API")
})

app.get("/data", (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, 'masai', () => {
        if (err) {
            res.send("Please login again")
            console.log(err)
        }else{
            res.send("Data")
        }
    })
});

// const token=req.query.token
// if(token==="abc123"){
//     res.send("Data")
// }else{
//     res.send("Login first")
// }
// })
app.get("/cart", (req, res) => {
    const token = req.query.token;
    jwt.verify(token, 'masai', () => {
        if (err) {
            res.send("Please login again")
            console.log(err)
        }else{
            res.send("Data")
        }
    })
})

app.get("/contact", (req, res) => {
    res.send("contact page")
})



app.listen(8080, () => {
    try {
        connection
        console.log("connected")
    } catch (err) {
        console.log("Trouble connecting")
        console.log(err)
    }
    console.log("running at port 8080")
})