//Mongoose


const mongoose=require("mongoose")

const main= async()=>{
    try{
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/school")
        console.log("Connect to the Mongo")
        // await Studentmodel.insertMany([{name:"Ansu",age:24,city:"Pune",is_married:false}])
        
        // const student =new Studentmodel({
        //     name:"Ravi",
        //     age:33,
        //     city:"Pune",
        //     is_married:false 
        // })
        // await student.save()

        console.log("Added to the db")
        const students =await Studentmodel.find({city:"Pune"})
        console.log(students)
        connection.disconnect()
        console.log("Disconnected")
    }catch(err){
        console.log("cannot connect")
        console.log(err)
    }
    
}

main()

const studentSchema=mongoose.Schema({
    name:{type:String,require:true},
    age:Number,
    city:String,
    roll_no:Number,
    location:String,
    is_married:Boolean
},{
    versionKey:false
})

//constructor function
const Studentmodel= mongoose.model("student",studentSchema)

//student is the collection name
//studentSchema create the structure 