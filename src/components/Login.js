import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg"
          alt=""
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="flex items-center justify-center h-full relative z-10">
        <form className="px-10 py-20 bg-black bg-opacity-70 text-white rounded-md w-96">
          <h1 className="self-start text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 bg-black bg-opacity-20 border border-white text-white p-4"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 bg-black bg-opacity-20 border border-white text-white p-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 bg-black bg-opacity-20 border border-white text-white"
          />
          {
            !isSignInForm && <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 mb-6 bg-black bg-opacity-20 border border-white text-white"
          />
          }
          <button className="w-full p-2 bg-red-600 rounded-md text-white font-semibold hover:bg-red-700 transition">
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="py-4 text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already a user? "}

            <span
              className="cursor-pointer hover:underline text-white"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
