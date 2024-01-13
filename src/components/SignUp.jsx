import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pictureOne from "../icons/signupp1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const navigate = useNavigate();

  const handleGettingDadta = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };
  // console.log(signUp);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/v1/user/createuser", signUp)
      .then((response) => {
        setToast(true);
        navigate("/login");
        setTimeout(() => {
          setToast(false);
        }, 3000);
        if (response.status === 409) {
          alert("User is Already Registered");
        }
      })
      .catch((error) => {
        console.log("Error Found " + error);
        setErrorToast(true);
        setTimeout(() => {
          setErrorToast(false);
        }, 3000);
      });
    setSignUp({ name: "", email: "", password: "" });
  };

  return (
    <div>
     
      {/* Main Div */}

      {/* Error Toaster Message */}
      {errorToast && (
        <div className="absolute top-[100px] w-[100%] bg-green-500 text-white p-3 rounded shadow">
          <h1>Error While Registering:</h1>
        </div>
      )}

      {/* Error Toaster Message ended */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="md:w-[100%] h-auto ">
          <img src={pictureOne} />
        </div>
        {/* 2nd div */}
        <div>
          <form
            className="flex flex-col mx-3 lg:mx-10 gap-3 h-[400px]
            "
            onSubmit={handleSubmit}
          >
            {/* Toaster Message */}
            {toast && (
              <div className="relative w-[60%] bg-green-500 text-white p-3 rounded shadow text-center">
                <h1>Your are Registered</h1>
              </div>
            )}

            {/* Toaster Message ended */}
            <h1 className="text-3xl font-bold mb-3">Create an Account</h1>
            <h1 className="font-semibold mb-3">Enter your details below</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="name"
              value={signUp.name}
              onChange={handleGettingDadta}
            />

            <input
              type="email"
              placeholder="Email or Phone Number "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="email"
              value={signUp.email}
              onChange={handleGettingDadta}
            />

            <input
              type="password"
              placeholder="Password "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="password"
              value={signUp.password}
              onChange={handleGettingDadta}
            />
            <button
              type="button"
              className="inline-block xl:w-1/2 rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Create Account
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center xl:w-1/2 rounded-full bg-primary p-3 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              <span className="flex items-center ">
                <FcGoogle className="mr-1" /> SignUp with Google
              </span>
            </button>

            <div className="flex gap-2 items-baseline"></div>
            <button
              type="button"
              className="inline-block xl:w-1/2 rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Already Account SignIn Here
            </button>
          </form>
        </div>
        {/* 2nd div */}
      </div>
      {/* Miain Div */}
     
    </div>
  );
};

export default SignUp;
