const watchMan = (req, res, next) => {
    if(req.url==="/data"){
        next()
    }else{
        res.send("bye")
    }
}

module.exports={
    watchMan
}