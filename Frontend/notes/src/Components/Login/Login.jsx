import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const login = () => {
  return (
    <div>
      <Header/>
    <div className=" flex justify-center align-middle mr-auto h-screen items-center ">
      <div className=" main  py-14 px-24  rounded-md  m-auto ">
        <h1 className=" font-design text-2xl mb-6">Welcome to Login Page</h1>

        <div className=" ff  mt-7 ">
          <form action="">
            <div className="mb-4">
              <label htmlFor="Email" className="block mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
              />
            </div>
            {/* password */}
            <div className="mb-4">
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
              <button className=" bn bg-white  w-full p-2 rounded-sm ">
                LOGIN
              </button>
            </div>
            <p className="text-yellow-300">
              Not registered Yet ? 
              <Link to="/Signup" className="btn btn-primary px-2 text-white underline">
              Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default login;
