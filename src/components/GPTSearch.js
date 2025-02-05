import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <div className="fixed inset-0 -z-20">
        <img
          src={BG_URL}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-[15vh] md:mt-[20vh]">
        <GPTSearchBar />
      </div>

      {/* Movie Suggestions */}
      <div className="w-full max-w-5xl p-4">
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
