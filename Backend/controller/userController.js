const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require ("jsonwebtoken");

// create a new user

exports.createuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validEmail.test(email)) {
      return res.status(422).json({ error: "Invalid email format" });
    }

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userdata = new userModel({ ...req.body, password: hashedPassword });

    const savedUser = await userdata.save();
    return res.status(201).json(savedUser);

  } catch (error) {
    console.log("Error in createuser:", error);
    return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};


// get user by id 

exports.fetchuser = async(req , res) => {
    try{
      const getuserId = await userModel.findById(req.params.id);
      if(!getuserId){
        return res.status(404).json({ message :"User not found"})
      }
      res.status(200).json(getuserId);
        
    }catch (error) {
        return res.status (500).json({error: "INTERNAL SERVER ERROR "});    
    }
};

//get all users 

exports.getallusers = async (req , res ) => {
  try {

    const users = await userModel.find();
    if (users.length==0) {
      console.log("No users here ");
      return res.status(404).json({message:"No users found in database"})
    }
    console.log("users fetched successfully");
    res.status(200).json(users);

  }catch(error) {
    return res.status(500).json({error : "INTERNAL SERVER ERROR "});   
  }
}

//update user 

exports.updateuser = async(req ,res ) => {
  try{
    const id = req.params.id;
    const {email} = req.body ;
     //check if already 
     const userExist = await userModel.findOne({_id: id});
     if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    if (email && email !== userExist.email) {
      const emailExist = await userModel.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "Email already exists." });
      }
    }
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);


  }catch(error){
    console.error("Error updating user:", error);
    return res.status(500).json({error : "INTERNAL SERVER ERROR"})
  }
}

//delete user by id 


exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await userModel.findById({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully deleted user." });
  } catch (error) {
    console.error("Error deleting user:", error); // Added log
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

// login user 

exports.login = async (req ,res) => {
  try{
    const {email , password} = req.body;
    // user is available means email
    const user = await userModel.findOne({email});
    if(!user) {
      
      return res.status(400).json({message:"Invalid email or password "});
    }
    //password check 
    
    const isMatch = await bcrypt.compare(password , user.password);
    if (!isMatch) {
      console.log("error during login:" , isMatch);
      return res.status (400).json({message : "Invalid email or password "});
    }
    //if password right token generate 
    const token = jwt.sign(
      {id:user._id },
      process.env.JWT_SECRET,
      {expiresIn:"1h"}

    );

    // send success response 
    return res.status (200).json({message: "Succesfully logged in" , token, user:user});

  }catch(error){
    console.log("Error during login:" , error);
    return res.status (500).json({error:"INTERNAL SERVER ERROR"})
  }
  
}