import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import {LOGO, USER_ICON} from "../utils/constants"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in case
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //sign out case
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-40 w-screen py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between items-center w-44">
          <img
            className="w-12 h-12"
            src={USER_ICON}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="bg-black text-white w-20 h-10"
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
