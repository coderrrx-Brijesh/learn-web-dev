// // A.Without using middle wares
// const express=require("express");
// const app=express();
// app.use(express.json());

// app.get("/health-checkup",function(req,res){
//     // 1.Query input
//     // const kidney_id=req.query.kidney_id;
//     // const user_name=req.query.user_name;
//     // const password=req.query.password;

//     // 2.Header input
//     const kidney_id=req.headers.kidney_id;
//     const user_name=req.headers.user_name;
//     const password=req.headers.password;

//     if(user_name=="coderrrx" && password=="Passit@1234"){
//         if(kidney_id==1 || kidney_id==2){
//             res.status(200).json({
//                 message:"Welcome to the health checkup",
//                 result:"healthy"
//             })
//         }
//         else{res.status(411).json({
//             message:"Wrong kidney_id or kidney doesn't exist anymore"
//         })}
//     }
//     else{
//         res.status(403).json({
//             message:"username or password is wrong"
//         })
//     }
// })

// app.listen(3000)

// B. Using middleware 
const expresss =require("express")
const app=expresss()

function user_middleware( req,res,next){
    const user_name=req.headers.user_name;
    const password=req.headers.password; 
    if(user_name=="coderrrx" && password=="Passit@1234"){
        next()
    }
    else{
        res.status(403).json({
            message:"username or password is wrong"
        })
        
}
} 
function kidney_middleware(req,res,next){
    const kidney_id=req.headers.kidney_id;
    if(kidney_id==1 ||kidney_id==2){
        next()
    }
else{
res.status(411).json({
message:"Wrong kidney_id or kidney doesn't exist anymore"
})
}
}

app.get("/health_checkup",user_middleware,kidney_middleware,function(req,res){
    res.status(200).json({
         message:"You are healthy"
     })
})

app.get("/kidney_transplant",user_middleware,kidney_middleware,function(req,res){
    res.status(200).json({
        message:"Kidney transplant successful"
    })
})

app.get("/kidney_failure",user_middleware,kidney_middleware,function(req,res){
    res.status(200).json({
        message:"Kidney failure detected"
    })
})
app.listen(3000)