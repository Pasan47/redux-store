import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAllPost } from "../store/postslice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";

function AllPosts() {
  const [toDo, setToDo] = useState([{}]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state)=>state.post.posts);
  const isLoading = useSelector((state)=>state.post.loading);
  const isError = useSelector((state)=>state.post.error);

  useEffect(() => {
    const displayPost = dispatch(getAllPost())
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
            <th>Title</th>
            <th>Content</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => {
            console.log(p.posttitle);
            console.log(p.postcontent);
            console.log(p.url);
            return (
              <tr>
                <td>{p.posttitle}</td>
                <td>{p.postcontent}</td>
                <td>{p.url}</td>
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

export default AllPosts;
