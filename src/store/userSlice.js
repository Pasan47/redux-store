import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//inintial state is a object
const initialState = {
    users:  [],
    loading: false,
    error: null,
  };

  export const addUser = createAsyncThunk(
    "user/adduser",
    async(userCredential)=>{
        const response = await axios.post(
            'http://localhost:5000/api/user/addUser',
            userCredential,
            {
                headers: {"Content-Type": "application/json"}
            }
        );
        return response.data
    }
  )

  export const getAllUser = createAsyncThunk(
    "user/getAllUser",
    async(getAllUser) =>{
      
      const response = await axios.get(
        'http://localhost:5000/api/user/getAllUser',
        getAllUser,
        {
          headers: {"Content-type": "application/json"},
        }
      )
      return response.data
    })


  const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(addUser.pending,(state)=>{
            return{
                ...state,
                loading:true,
                error:null,
            }
        })
        .addCase(addUser.fulfilled, (state,action)=>{
            return{
                ...state,
                loading:false,
                error:null,
                users: [...state.users,action.payload]
            }
        })
        .addCase(addUser.rejected,(state,action)=>{
            return{
                ...state,
                loading:false,
                error:action.error,
            }
        })
        
        .addCase(getAllUser.pending,(state)=>{
            return{
            ...state,
            loading:true,
            error:null,
            }
        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            return{
            ...state,
            loading:false,
            error:null,
            users: action.payload,
            }
        })
        .addCase(getAllUser.rejected,(state,action)=>{
            return{
            ...state,
            loading:false,
            error: action.error,
            }
        })
    }
  })



  export default userSlice.reducer