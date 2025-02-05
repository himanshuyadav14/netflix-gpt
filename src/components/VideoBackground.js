import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        class="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;`}
        title="Movie Trailer"
        vq="hd720"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
