import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import {BG_URL} from "../utils/constants"

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-20">
        <img
          src={BG_URL}
          alt=""
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
