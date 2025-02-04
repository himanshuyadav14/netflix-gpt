import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results?.filter((video) => video.type == "Trailer");
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };
};

export default useMovieTrailer;
