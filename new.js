const http = require('http')


const server= http.createServer((req,res)=>{

console.log("reqUrl:",req.url);

if (req.url ==='/'){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>  WELCOME TO NODE.JS!  </h1>")
    res.end()

}else if (req.url ==='/first'){
    res.writeHead(200,{"content-type":"text/plain"})
    res.write("this is successfully")
    res.end()
}else{
     res.writeHead(404,{"content-type":"text/plain"})
    res.write("page is  not found")
    res.end()
}

})

server.listen(7000,console.log("the server is running....!"))