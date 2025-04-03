const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

// load environment variables from env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY ");
    app.listen(PORT, (err) => {
      if (err) {
        console.error("this is error", err);
      } else {
        console.log(`server is connected on Port ${PORT}`);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
