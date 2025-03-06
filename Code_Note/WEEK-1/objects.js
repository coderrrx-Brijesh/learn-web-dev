const allusers=[
    {
        firstname:"Brijesh",
        roll_no:"imt_2023025",
        power:{
            tech:"cp",
            strength:"celestial level"
        }
    },
    {
        firstname:"Akshit",
        roll_no:"imt_2023007",
        power:{
            tech:"dsa",
            strength:"noob level"
        }
    },
    {
        firstname:"Abhinav",
        roll_no:"imt_2023002",
        power:{
            tech:"dev",
            strength:"pro noob"
        }
    }
]
for(let i=0;i<allusers.length;i++){
    if(allusers[i]["firstname"]){
        console.log(allusers[i])
    }
}