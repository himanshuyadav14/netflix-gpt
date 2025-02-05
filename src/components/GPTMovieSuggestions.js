import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieResults) return null;

  return (
    <div className="p-4 mx-auto my-6 bg-black text-white bg-opacity-80 rounded-lg w-full max-w-4xl">
      <div className="space-y-4">
        {movieNames?.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]?.results} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
