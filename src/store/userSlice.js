import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state is an object 
const initialState = {
    users:  [], // initial empty array
    loading: false,
    error: null,
  };

// create user slice to connect user to the backend

export const addUser = createAsyncThunk(
    "user/adduser",
    async(userCredential) => {
        alert(userCredential);

        const response = await axios.post(
            'http://localhost:5000/api/user/addUser',
            userCredential,
            {
                headers: {"Content-Type": "application/json"},
            }
        );
        return response.data
    }
)

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async(getAllUsers) => {
        const response = await axios.get(
            'http://localhost:5000/api/user/getAllUsers',
            getAllUsers,
            {
                headers: {"Content-type": "application/json"},
            }
           
        )
        return response.data
    }
)


 //! ******************************
const userSlice = createSlice({
    //object
    name: "user", // should same as store
    initialState, // pass the initial state

    // extra reducers for handle states in promises --> pending, rejected, fulfilled
    extraReducers: (builder) => {
        builder
        //? addUser reducers
        .addCase(addUser.pending, (state) => {
            return{
                ...state, //clone the previous state
                loading: true,
                error: null,
            }
        })
        .addCase(addUser.fulfilled, (state, action) => {
            return{
                ...state,
                loading: false,
                error: null,
                users: [...state.users, action.payload] // the past users and the newly added user is passed to the users list
            }
        })
        .addCase(addUser.rejected, (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.error,
            }
        })
        //? getAllUsers reducers
        .addCase(getAllUsers.pending, (state) => {
            return{
                ...state, //clone the previous state
                loading: true,
                error: null,
            }
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            return{
                ...state,
                loading: false,
                error: null,
                users: action.payload // the past users and the newly added user is passed to the users list
            }
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.error,
            }
        })
    }




    
})

// mention that there is a userSclice to the store
export default userSlice.reducer;



