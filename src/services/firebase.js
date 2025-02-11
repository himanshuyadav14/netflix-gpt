// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-ba361.firebaseapp.com",
  projectId: "netflixgpt-ba361",
  storageBucket: "netflixgpt-ba361.firebasestorage.app",
  messagingSenderId: "853205329629",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-GWE7MCMT2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
