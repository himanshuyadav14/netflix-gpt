import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = ({ isBlack }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const [selectedLang, setSelectedLang] = useState(langKey);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    setSelectedLang(langKey);
  }, [langKey]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`absolute w-full px-6 md:px-20 py-3 ${
        isBlack ? "bg-black" : "bg-gradient-to-b from-black"
      } z-20 flex flex-col md:flex-row justify-between items-center`}
    >
      {/* Logo */}
      <img className="w-32 md:w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
          {/* Language Selector (only visible when GPT search is active) */}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-md"
              value={selectedLang}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            onClick={handleGPTSearch}
            className="py-2 px-4 bg-purple-800 text-white rounded-lg text-sm md:text-base"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          {/* User Icon */}
          <img
            className="w-10 h-10 md:w-12 md:h-12"
            src={USER_ICON}
            alt="user icon"
          />

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-black text-white px-4 py-2 rounded-md text-sm md:text-base"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
