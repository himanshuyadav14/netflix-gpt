// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmTLbcYOLJBvyU6gJCej4-nOgJ2L-eW_4",
  authDomain: "netflixgpt-ba361.firebaseapp.com",
  projectId: "netflixgpt-ba361",
  storageBucket: "netflixgpt-ba361.firebasestorage.app",
  messagingSenderId: "853205329629",
  appId: "1:853205329629:web:d92b3ff38a5a2c536d9d34",
  measurementId: "G-GWE7MCMT2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
