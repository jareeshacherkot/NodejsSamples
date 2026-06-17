const express=require("express");
const app =express()

app.use((req,res,next)=>{
    console.log(("this is running"));
    next()
    

})



// const loginpage=(req,res,next)=>{
//     console.log("successfully login");
//     next()
    
// }

app.get("/mateLipstics",(req,res)=>{
  res.send("this is mate lipstics page")
})

app.get("/foundations",(req,res)=>{
    res.send("this is foundations page")

})


app.get("/conceller",(req,res)=>{
    res.send("this is conceller page")
})
app.listen(8000,()=>{
    console.log("succussfully running");
    
})