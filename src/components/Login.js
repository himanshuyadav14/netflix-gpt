import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //Sign In Sign up logic
    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0">
        <img src={BG_URL} alt="" className="h-full w-full object-cover " />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="flex items-center justify-center h-full relative z-10">
        <form
          onSubmit={handleSubmit} // Changed to handle submit
          className="px-10 py-20 bg-black bg-opacity-70 text-white rounded-md w-96"
        >
          <h1 className="self-start text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="w-full mb-4 bg-black bg-opacity-20 border border-white text-white p-4"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="w-full mb-4 bg-black bg-opacity-20 border border-white text-white p-4"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 bg-black bg-opacity-20 border border-white text-white"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-4 mb-6 bg-black bg-opacity-20 border border-white text-white"
            />
          )}
          {errorMessage && (
            <p className="text-red-500 py-2">{errorMessage}</p> // Error message handling
          )}
          <button
            type="submit" // Use 'submit' type to trigger form submission
            className="w-full p-2 bg-red-600 rounded-md text-white font-semibold hover:bg-red-700 transition"
          >
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
