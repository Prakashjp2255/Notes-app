const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const fetch = require('node-fetch');


app.use(express.json()); 


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

//routes 
const signinRoute = require('./routes/userRoutes.js');
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


  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

// Function to make POST requests
function makePostRequest(url, token, payload) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


  app.use(cors(corsOptions));
  app.use ('/admin' , signinRoute);
  
 