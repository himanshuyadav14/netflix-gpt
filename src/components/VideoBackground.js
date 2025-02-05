import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-screen">
      {trailer?.key ? (
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-black text-white text-center p-4">
          <p>Trailer not available</p>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
