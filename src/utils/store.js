import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";
import movieSlice from "../utils/movieSlice";
import gptSlice from "../utils/gptSlice";
import configSlice from "../utils/configSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default store;
