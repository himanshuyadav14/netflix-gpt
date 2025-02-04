import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";
import movieSlice from "../utils/movieSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice
  },
});

export default store;
