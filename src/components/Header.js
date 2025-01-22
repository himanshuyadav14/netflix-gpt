import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-40 w-screen py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between items-center w-44">
          <img
            className="w-12 h-12"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV-y2bh4LQX0UoXAbtGSc00FZasOIN9uVB7VDXIaGXw6qk4IwNM-IUjzGudWpS8rlQ3Slc6Wi1_oJb777a7q4XJk54BjVmk.png?r=fea"
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
