const express = require("express")
const app = express()



const loginChecked = (req,res,next) => {
    console.log("successfully authenticated....");
    next()
    
}

app.get("/cart",loginChecked,(req,res)=>{
    res.send("this is the cart page")

})

app.get('/order',(req,res)=>{
    res.send("this is the order page")
})


app.listen(8000,()=>console.log("the server is running successfully"))

