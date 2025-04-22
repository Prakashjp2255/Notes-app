import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const res = await axios.post("http://localhost:5000/admin/login", {
        email,
        password,
      });
      console.log("API response:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id); 
      setError("✅ Login successful!");
      navigate("/notes");
    } catch (error) {
      setError(error.response?.data?.error || "Signup First ");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="main py-14 px-10 bg-gray-800 rounded-md w-full max-w-md">
          <h1 className=" font-design text-white text-2xl mb-6 font-semibold text-center">
            Welcome to Login Page
          </h1>
          {error && <p className=" ff text-center text-white mb-4">{error}</p>}
          <div className=" ff  mt-7 ">
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bn bg-white w-full p-2 rounded-sm font-bold hover:bg-orange-50 transition"
              >
                LOGIN
              </button>

              <p className="text-white mt-4 text-center">
                Not registered yet?{" "}
                <Link to="/Signup" className="underline text-yellow-300">
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

export default Login;
