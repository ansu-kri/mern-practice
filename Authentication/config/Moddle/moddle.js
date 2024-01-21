const mongoose=require("mongoose")
const Username=mongoose.Schema({
    name:String
})

const User2=mongoose.model("User",Username)
module.exports={
    User2
}