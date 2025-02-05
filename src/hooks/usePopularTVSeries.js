import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularTVSeries } from "../utils/movieSlice";
const usePopularTVSeries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularTVSeries();
  }, []);
  const getPopularTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addPopularTVSeries(jsonData.results));
  };
};

export default usePopularTVSeries;
