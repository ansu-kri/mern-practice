//follow the MVC

const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://anshu:anshu@cluster0.z9u7nzx.mongodb.net/masaiSchool ")

module.exports={
    connection
}