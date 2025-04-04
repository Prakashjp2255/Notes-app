import React, { useState } from 'react'
import Header from '../Header/Header';
import { Link } from "react-router-dom";

const Signup = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState("");

  const handleSignup =async (e) => {
    e.preventDefault();
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