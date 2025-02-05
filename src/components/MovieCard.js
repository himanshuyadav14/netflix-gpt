import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie?.poster_path) return null;

  return (
    <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 cursor-pointer transition-transform transform hover:scale-105">
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={IMG_CDN_URL + movie?.poster_path}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
