const addRoll=(req,res,next)=>{
    if(req.method==="POST"){
        let roll=Math.random()*100
        req.body.roll_np=roll
        req.body.school="masai"
        next()
    }
   
}

module.exports={
    addRoll
}