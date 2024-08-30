import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateProductElementValue: (state, action) => {},
    fetchPostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createPost: (state, action) => {
      console.log(state.error);

      console.log(action.payload);

      state.posts.push(action.payload);
      alert(JSON.stringify(state.posts));
      localStorage.setItem("posts", JSON.stringify(state.posts));
      // alert(localStorage.getItem("posts").length);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    editPost: (state, action) => {
      const newArray = JSON.parse(JSON.stringify(state.posts));
      console.log(state.error);

      let index = 0;
      let found = false;
      for (let item in newArray) {
        alert(action.payload.id);
        if (newArray[item].id === action.payload.id) {
          index = item;
          found = true;
        }
      }
      alert(index);
      if (found) {
        state.posts[index] = action.payload;
        alert(index);
        alert(state.posts[index]);

        localStorage.setItem("posts", JSON.stringify(state.posts));
      }
    },
    fetchPostDetails: (state, action) => {
      const postToEdit = state.posts.find((post) => post.id === action.payload);
      return postToEdit;
    },
  },
});

export const {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  createPost,
  deletePost,
  editPost,
  fetchPostDetails,
} = postSlice.actions;
export default postSlice.reducer;
