const express=require("express");
const app=express();
const path=require("path")


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"))

app.get("/home",()=>{
    res,sendFile(path,join(__dirname,))
})

})
app.listen(8000,()=>console.log("running successfully"));
