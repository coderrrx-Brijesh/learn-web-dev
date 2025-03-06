// 1.calculate number of requests made from all routes
const express = require("express")
const app=express()

let no_of_req=0;

function cnt_req(req,res,next){
    no_of_req++;
    next();
}

app.use(cnt_req)

app.get("/route_1",(req,res)=>{
    res.send("Hello Coderrrx from route 1"+" number of req==>"+no_of_req)
})
app.get("/route_2",(req,res)=>{
    res.send("Hello Coderrrx from route 2"+" number of req==>"+no_of_req)
})

app.listen(3000)