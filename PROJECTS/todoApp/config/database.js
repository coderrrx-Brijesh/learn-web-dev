const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect("mongodb+srv://coderrrx:Passit%401234@learningserver.mu9jzil.mongodb.net/?retryWrites=true&w=majority&appName=LearningServer", {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}

module.exports = dbConnect;