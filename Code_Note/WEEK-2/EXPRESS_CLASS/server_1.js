const express=require("express")
const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://coderrrx:Passit%401234@learningserver.mu9jzil.mongodb.net/?retryWrites=true&w=majority&appName=LearningServer',{
  useNewurlParser:true,
  useUnifiedTopology:true
}).then(()=>{console.log("Connection Successfull")}).catch((error)=>{console.log("Recicved an error")})
const app = express()
const port = 3000

const bodyParser=require('body-parser')
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.post("/post",function(req,res){
  const {name,brand}=req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted Successfully")
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})