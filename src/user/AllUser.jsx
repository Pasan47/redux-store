import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAllUser } from "../store/userSlice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";

function AllUsers() {
  const [toDo, setToDo] = useState([{}]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state)=>state.user.users);
  const isLoading = useSelector((state)=>state.user.loading);
  const isError = useSelector((state)=>state.user.error);

  useEffect(() => {
    const displayPost = dispatch(getAllUser())
    //console.log(posts);
  }, []);



  return (
    <>
    { isLoading ? (
      <p>Loading posts..... </p>
    ) : isError ? (
      <p> Error......</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((p) => {
            console.log(p.name);
            console.log(p.age);
            console.log(p.gender);
            return (
              <tr>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>
                  <Link to={`editPost/${p.id}`}>Editpost</Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      console.log("post deleted");
                    }}
                  >
                    deletePost
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
      }
    </>
  );
}

export default AllUsers;
