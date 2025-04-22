import React, { useState } from 'react'
import Header from '../Header/Header';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState("");
  const navigate = useNavigate();
  

  const handleSignup =async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post("http://localhost:5000/admin/signup" , {
        name,
        email,
        password
      }) 
      console.log("API response:", res.data);
      setError("✅ Signup successful!");
      navigate('/login');

    }catch(error){
      setError(error.response?.data?.error || "❌ signup Failed");
    }
  };

  return (
    <>
      <Header/>

      <div className=" flex justify-center align-middle mr-auto h-screen items-center ">
      <div className=" main  py-14 px-24  rounded-md  m-auto ">
          <form onSubmit={handleSignup}>
            <h4 className= ' font-design text-2xl mb-4'>Welcome to signup page </h4>


            <div className=" ff  mb-4">
              <label htmlFor="Name" className="block mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) =>  setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
              />
            </div>

            <div className=" ff  mb-4">
              <label htmlFor="Email" className="block mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
              />
            </div>

            <div className=" ff mb-4">
              <label htmlFor="password" className="block mb-2 text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) =>  setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
              />
            </div>

            <div>
              <button className=" ff bn bg-white  w-full p-2 rounded-sm ">
                SIGNUP
              </button>
            </div>
            <p className=" ff text-yellow-300">
              Already have an account ? 
              <Link to="/login" className=" ff btn btn-primary px-2 text-white underline">
              Login
              </Link>
            </p>

          </form>
        </div>
      </div>

    </>


  );
};

export default Signup ;