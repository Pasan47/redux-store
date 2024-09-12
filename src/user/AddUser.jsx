import React, { useRef } from "react";
 
import { useDispatch } from "react-redux";

import { addUser } from "../store/userSlice";

const  AddUser =  () =>{

  

    let name = useRef("");
    let age = useRef("");
    let gender = useRef("");
    const dispatch = useDispatch();


  const insertUser = async() => {
    console.log("user added");
    const obj = {
      name: name.current,
      age: age.current,
      gender: gender.current,
    };

    dispatch(addUser(obj));
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
            name="name"
            id="name"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter name"
            onChange={(event) => {
              name.current = event.target.value;
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter age"
            onChange={(event) => {
              age.current = event.target.value;
            }}
          />
        </div>
        <div>
      <label className="block text-sm font-medium text-gray-700">
        Gender
      </label>
      <select
        name="gender"
        id="gender"
        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(event) => {
          gender.current = event.target.value;
        }}
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
          Create User
        </button>
      </form>
    </div>

  );
};

export default AddUser;
