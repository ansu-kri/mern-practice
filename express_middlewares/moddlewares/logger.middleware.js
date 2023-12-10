const fs=require("fs")

const logger=(req,res,next)=>{
    //req.url==>route
    //req.method==>method
    //use append filesync

    fs.appendFileSync("../logs.txt",`Route:${req.url} Methods: ${req.method}\n`, "utf-8")
    next()
}

module.exports={
    logger
}