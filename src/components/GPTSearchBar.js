import React, { useRef, useState, useEffect } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const MAX_SEARCHES = 5; // Maximum number of searches allowed

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [searchCount, setSearchCount] = useState(
    Number(localStorage.getItem("searchCount")) || 0
  );

  useEffect(() => {
    localStorage.setItem("searchCount", searchCount);
  }, [searchCount]);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json;
  };

  const handleGPTSearchClick = async () => {
    if (searchCount >= MAX_SEARCHES) return;

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: "${searchText.current.value}". Only give me names of 5 movies, comma separated. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-4o-mini",
      });

      if (!gptResults?.choices?.length) {
        throw new Error("No choices returned from GPT");
      }

      const gptMovies = gptResults.choices[0]?.message?.content
        .split(",")
        .map((movie) => movie.trim());

      if (!gptMovies.length) {
        throw new Error("No valid movie suggestions returned");
      }

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);

      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
      );

      setSearchCount((prev) => prev + 1); // Increment search count
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 w-[400px] md:w-[800px]">
      <form
        className="bg-black w-full max-w-lg rounded-lg flex flex-col sm:flex-row items-center p-3"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Input Field */}
        <input
          ref={searchText}
          type="text"
          className="w-full sm:w-auto flex-1 p-3 m-2 rounded-md text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
          disabled={searchCount >= MAX_SEARCHES} // Disable if limit reached
        />

        {/* Search Button */}
        <button
          onClick={handleGPTSearchClick}
          className={`w-full sm:w-auto px-6 py-3 m-2 rounded-lg ${
            searchCount >= MAX_SEARCHES
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-700 text-white hover:bg-red-800"
          }`}
          disabled={searchCount >= MAX_SEARCHES}
        >
          {searchCount >= MAX_SEARCHES ? "Limit Reached" : lang[langKey].search}
        </button>
      </form>

      {/* Remaining Searches Display */}
      <p className="text-white mt-2 text-sm">
        {searchCount < MAX_SEARCHES
          ? `Remaining Searches: ${MAX_SEARCHES - searchCount}`
          : "You have reached the search limit. Try again later!"}
      </p>
    </div>
  );
};

export default GPTSearchBar;
