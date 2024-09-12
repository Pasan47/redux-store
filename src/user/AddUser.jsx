import React, { useEffect, useState } from "react";
import  { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate, Link } from "react-router-dom";


function AddUser(){

  let name = useRef("");   /// avoid re render
  let age = useRef("");  // then write onchange function for each
  let gender = useRef("");
  const dispatch = useDispatch();

  const insertUser = async () => {
   
    console.log("This is from add user");
    //event.preventDefault();
    const obj = {
      name: name.current,
      age: age.current,
      gender: gender.current,
    };
    dispatch(addUser(obj));   /// send these object as postCredential
  };




  return (
    <div>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter title"
            onChange={(event) => {
              name.current = event.target.value;
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter content"
            onChange={(event) => {
              age.current = event.target.value;
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(event) => {
              gender.current = event.target.value;
            }}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={insertUser}
        >
          Add User
        </button>
      </form>
    </div>
  );
}




export default AddUser;
