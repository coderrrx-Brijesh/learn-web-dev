const express=require("express")
const app=express()
app.use(express.json())
var users=[{
    id:"p_1",
    body_part_health:[{
        healthy:false
    }]
}]

app.get("/",function(req,res){
    const bdy_prt_cnt=users[0].body_part_health.length;
    let hlth_bdy_prt_cnt=0;
    for(let i=0;i<users[0].body_part_health.length;i++){
        if(users[0].body_part_health[i].healthy)hlth_bdy_prt_cnt++
    }
    unhlthy_bdy_prt=bdy_prt_cnt-hlth_bdy_prt_cnt
    res.json({
        bdy_prt_cnt,
        hlth_bdy_prt_cnt,
        unhlthy_bdy_prt
    })
})

app.post("/",function(req,res){
    const is_healthy=req.body.is_healthy
    users[0].body_part_health.push({
        healthy:is_healthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].body_part_health.length;i++){
        users[0].body_part_health[i].healthy=false;
    }
    res.json({})
})

app.delete("/",function(req,res){
    const new_body_prt_hlth=[]
    for(let i=0;i<users[0].body_part_health.length;i++){
        if(users[0].body_part_health[i].healthy){
            new_body_prt_hlth.push({
                healthy:true
            })
        }
    }
    users[0].body_part_health=new_body_prt_hlth
    res.json({msg:"Done!"})
})

app.listen(3000)