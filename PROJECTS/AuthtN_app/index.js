const express = require("express");
const app = express();
const cookieParser= require("cookie-parser")

app.use(express.json());
app.use(cookieParser());

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const dbConnect = require("./config/database.js");
dbConnect();



const signRoutes = require("./routes/signRoutes");
app.use("/api/v1", signRoutes);

app.get("/", (req, res) => {
  res.send("<h1>HOMEPAGE</h1>");
});
app.listen(PORT, (req, res) => {
  console.log(`APPP IS STARTED AT ${PORT}`);
});
