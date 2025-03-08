// A.Array of number validate 
// const express=require("express");
// const zod=require("zod");
// const app=express()

// app.use(express.json())

// app.post("/kidneys_no",function(req,res){
//     const kidneys=req.body.kidneys;
//     const schema=zod.array(zod.number())
//     const response=schema.safeParse(kidneys)
//     if(!response.success){
//         res.json({
//             msg:"Something is up with your input...."
//         })
//     } 
//     else{
//         res.send(
//             "no_of_kidneys:  "+kidneys.length)
//     }
// })

// app.listen(3000)

// B.Email and password validation
const zod=require("zod")
const express=require("express")

const app=express()
app.use(express.json())

const user_schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})
function user_validation(req,res,next){
    let user_details=req.body
    const response=user_schema.safeParse(user_details)
    if(!response.success){
        console.log(response)
        next()
    }
    else{
        console.log(response)
        res.send("Sucessfull login!")
    }
}
app.post("/user",user_validation,(req,res)=>{
    res.send("Wrong user details");
})
app.listen(3000)