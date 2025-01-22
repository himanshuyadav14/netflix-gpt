import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
