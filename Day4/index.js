const http = require("http")
//http is the inbuilt module we can not create .
const fs = require("fs")

//Now we create server

// console.log(http)

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("home page")
    }else if(request.url==="/data"){
        fs.readFile("./data.json",(err,data)=>{
            if(err){
                response.write(err)
                response.end()
            }else{
                response.end(data)
            }
        })
        // response.end("Data is here")
        //how can be read the file
    }else if(request.url==="/reports"){
        response.setHeader("Content-type","text/html")
        // response.end("reports is here")
        response.end("<h1>Report is here</h1>")
    }else{
        response.end(" No end point")
    }
})

//to run the server, where the usb is plugend that is port

server.listen(4500,()=>{
    console.log("The server is running at port 4500")
})
