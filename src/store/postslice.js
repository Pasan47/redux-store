import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
  posts:  [],
  loading: false,
  error: null,
};


export const addPost = createAsyncThunk(
  "post/addpost",
  async(postCredential) => {
    alert(postCredential);    // install axios   to handle async calls
    const response = await axios.post(
      'http://localhost:5000/api/post/addpost',
      postCredential,
      {
        headers: {"Content-Type": "application/json"},
      }

    );
    return response.data //Return the data from the response
  }
)


export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async(getAllPost) =>{
    
    const response = await axios.get(
      'http://localhost:5000/api/post/getAllPost',
      getAllPost,
      {
        headers: {"Content-type": "application/json"},
      }
    )
    return response.data
  })

  // export const editPost = createAsyncThunk(
  //   "post/getPostById",
  //   async(editPost)=>{
  //     const response = await axios.getPostById(
  //       'http://localhost:5000/api/post//getPostById/:id',
  //       editPost,
  //       {
  //         headers: {"Content-type": "application/json"}
  //       }
  //     )
  //     return response.data
  //   }
  // )


const postSlice = createSlice({
  name : "post",
  initialState,
  extraReducers: (builder)=>{
    builder
    .addCase(addPost.pending,(state)=>{
      return{
        ...state,
        loading:true,
        error:null,
      }
    })
    .addCase(addPost.fulfilled,(state,action)=>{
      return{
        ...state,
        loading:false,
        error:null,
        posts: [...state.posts,action.payload]
      }
    })
    .addCase(addPost.rejected,(state,action)=>{
      return{
        ...state,
        loading:false,
        error: action.error,
      }
    })
    .addCase(getAllPost.pending,(state)=>{
      return{
        ...state,
        loading:true,
        error:null,
      }
    })
    .addCase(getAllPost.fulfilled,(state,action)=>{
      return{
        ...state,
        loading:false,
        error:null,
        posts: action.payload,
      }
    })
    .addCase(getAllPost.rejected,(state,action)=>{
      return{
        ...state,
        loading:false,
        error: action.error,
      }
     })
    // .addCase(editPost.pending,(state)=>{
    //   return{
    //     ...state,
    //     loading:true,
    //     error:null,
    //   }
    // })
    // .addCase(editPost.fulfilled,(state,action)=>{
    //   return{
    //     ...state,
    //     loading:false,
    //     error:null,
    //     posts: action.payload,
    //   }
    // })
    // .addCase(editPost.rejected,(state,action)=>{
    //   return{
    //     ...state,
    //     loading:false,
    //     error:null,
    //     posts: action.error,
    //   }
    // })
  }
})

export default postSlice.reducer
