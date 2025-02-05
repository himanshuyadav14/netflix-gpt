import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[10%] flex items-center justify-center bg-black md:pt-0">
      {/* Video Background */}
      <VideoBackground movieId={id} />

      {/* Video Title - Ensuring it stays above the background */}
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
