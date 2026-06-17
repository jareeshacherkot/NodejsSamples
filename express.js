const express= require("express")
const app =express()

app.get("/natural",(req,res)=>{
    res.send("anything existing in or caused by nature, rather than being made, processed, or artificial")

});

app.get("/sky",(req,res)=>{
    res.send("using sensory details to capture color, light, and mood, transforming a simple blue  description into a vivid scene")
})

app.get("/rain",(req,res)=>{
    res.send("the drops of water that fall from the sky")
})

app.listen(8000,()=>{
    console.log("successfully completed");   //this is a command............
    
})


