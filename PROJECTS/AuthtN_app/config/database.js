const mongoose=require('mongoose')
require('dotenv').config()
const DATABASE_URL=process.env.DATABASE_URL
const dbConnect= async ()=>{
    mongoose.connect(DATABASE_URL || "mongodb+srv://coderrrx:Passit%401234@learningserver.mu9jzil.mongodb.net/SignUserDataDB")
    .then(() => console.log(`DB ka Connection is Successful with ${DATABASE_URL || "mongodb+srv://coderrrx:Passit%401234@learningserver.mu9jzil.mongodb.net"}`))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports=dbConnect;