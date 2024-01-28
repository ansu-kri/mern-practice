const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:Number
})

const USerModel=mongoose.model("User",UserSchema)
module.exports={
    USerModel
}