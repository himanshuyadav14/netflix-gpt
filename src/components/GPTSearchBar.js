import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated. like the example result given ahead. Example result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-4o-mini", // Ensure the model is available
      });

      if (
        !gptResults ||
        !gptResults.choices ||
        gptResults.choices.length === 0
      ) {
        throw new Error("No choices returned from GPT");
      }

      const gptMovies = gptResults.choices[0]?.message?.content
        .split(",")
        .map((movie) => movie.trim());
      if (!gptMovies || gptMovies.length === 0) {
        throw new Error("No valid movie suggestions returned");
      }

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);


      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
      );
    } catch (error) {
      console.error("Error fetching movie data:", error);
      // TODO: Show a user-friendly error message or fallback UI
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearchClick}
          className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
