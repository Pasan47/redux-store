import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postslice from "./postslice";
import userSlice from "./userSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postslice,
    user: userSlice
   
  },
});

export default store;
