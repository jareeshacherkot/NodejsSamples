const express=require("express");
const app =express()


const loginpage=(req,res,next)=>{
    console.log("successfully login");
    next()
    
}

app.get("/mateLipstics",loginpage,(req,res)=>{
  res.send("this is mate lipstics page")
})

app.get("/foundations",loginpage,(req,res)=>{
    res.send("this is foundations page")

})
app.listen(7000,()=>{
    console.log("succussfully running");
    
})
