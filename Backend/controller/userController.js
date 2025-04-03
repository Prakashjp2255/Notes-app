const userModel = require ("../models/userModel");
const mongoose = require ("mongoose");


// create a new user 

exports.createuser = async (req , res ) => {
    try{

        const userdata = new userModel(req.body);

    }catch (error) {
        console.log("error occur during create user" , error);
        
    }
}