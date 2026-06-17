const express = require("express")
const app = express()


app.use((req,res,next)=>{
    console.log("this is the global middleware");
    next()
    
})


app.get("/cart",(req,res)=>{

    res.send("this is the cart page")

})

app.get('/order',(req,res)=>{
    res.send("this is the order page")
})


app.listen(8000,()=>console.log("the server is running successfully......"))