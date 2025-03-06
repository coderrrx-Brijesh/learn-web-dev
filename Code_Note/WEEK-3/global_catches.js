const express=require("express")
const app=express()

app.use(express.json())

app.post("/kidneys_no",function(req,res){
    const kidneys=req.body.kidneys;
    res.send(
        "no_of_kidneys:  "+kidneys.length)
})

app.use((err,req,res,next)=>{
    res.json({
        msg:"Something is up with your input...."
    })
})

app.listen(3000)