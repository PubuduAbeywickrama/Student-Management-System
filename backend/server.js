const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.2drfzpu.mongodb.net/?retryWrites=true&w=majority"/*,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
  }*/);

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("Mongodb Connection success!");
  })
  


const studentRouter = require("./routes/students.js");

app.use("/student", studentRouter);
  
  app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
  })




//m1MFbrfjT8Sha4OF
//mongodb+srv://admin:<password>@cluster0.udziuzn.mongodb.net/?retryWrites=true&w=majority