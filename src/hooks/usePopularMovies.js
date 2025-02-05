import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  };
};

export default usePopularMovies;
