import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postslice from "./postslice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postslice,
  },
});

export default store;
