import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Protected from "./components/AuthLayout";
import AddPost from "./pages/AddPost";
import AllPosts from "./pages/AllPosts";
import SignUp from "./pages/signup";
import EditPost from "./pages/EditPost";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import AllUsers from "./user/AllUser";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Protected childern={<Login />} />,
      },
      {
        path: "AddPost",
        element: <Protected childern={<AddPost />} />,
      },
      { path: "AllPost", element: <AllPosts /> },
      { path: "SignUp", element: <SignUp /> },
      { path: "Login", element: <Login /> },
      { path: "AllPost/editPost/:postId", element: <EditPost /> },
      { path: "AddUser", element: <AddUser /> },
      { path: "AllUsers", element: <AllUsers /> },
      { path: "EditUser", element: <EditUser /> },
    ],
  },
]);
console.log(router);
console.log(store);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
