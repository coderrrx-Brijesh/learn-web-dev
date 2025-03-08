const express=require ("express")
const app=express()
function calculate(a,b){
    return a+b
}
app.get("/",function(req,res){
    const a=req.query.a
    const b=req.query.b
    res.send("Hi coderrrx! sum is "+calculate(a,b))
})
app.listen(3000) 