import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
