import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AllPosts() {
  const [toDo, setToDo] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("posts")) {
      const storedArray = localStorage.getItem("posts");
      console.log(storedArray[10].title);

      const parsedArray = JSON.parse(storedArray);
      const firstObject = parsedArray[0];
      const propertyValue = firstObject.title;
      console.log(propertyValue);

      setToDo(parsedArray);
    } else {
      setToDo([]);
    }

    // console.log(toDo);

    // console.log(localStorage.getItem("posts").length);

    // setToDo(localStorage.getItem("posts"));
    // console.log(toDo[0].title);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {toDo.map((t, postId) => {
            console.log(t.title);
            console.log(t.content);
            console.log(t.metaTag);
            return (
              <tr>
                <td>{t.title}</td>
                <td>{t.content}</td>
                <td>{t.metaTag}</td>
                <td>
                  <Link to={`editPost/${t.id}`}>Editpost</Link>
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
    </>
  );
}

export default AllPosts;
