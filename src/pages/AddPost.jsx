import React, { useRef } from "react";
import { createPost } from "../store/postslice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AddPost() {
  const parsedArray = JSON.parse(localStorage.getItem("posts")) || [];
  let id = useRef(0);
  let title = useRef("");
  let content = useRef("");
  let metaTag = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeTitle = (value) => {
    title.current = value;
  };
  const insertPost = () => {
    id.current = parsedArray.length !== 0 ? parsedArray.slice(-1)[0].id + 1 : 0;
    console.log("This is from insert post");
    //event.preventDefault();
    const obj = {
      id: id.current,
      title: title.current,
      content: content.current,
      metaTag: metaTag.current,
    };
    console.log(obj);

    dispatch(createPost(obj));

    navigate("/AllPost");
  };

  const changeContent = (value) => {
    content.current = value;
  };

  const changeMetaTag = (value) => {
    metaTag.current = value;
  };
  return (
    <div>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter title"
            onChange={(event) => {
              title.current = event.target.value;
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter content"
            onChange={(event) => {
              content.current = event.target.value;
            }}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            MetaTag
          </label>
          <input
            type="text"
            name="image"
            id="metaTag"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter image URL"
            onChange={(event) => {
              metaTag.current = event.target.value;
            }}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={insertPost}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
