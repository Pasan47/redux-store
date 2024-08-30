import React, { useEffect, useRef } from "react";
import postslice, { editPost, fetchPostDetails } from "../store/postslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = useRef("");
  const content = useRef("");
  const metaTag = useRef("");
  let postIdToEdit = useRef(0);
  const { postId } = useParams();
  const posts = useSelector((state) => state.post.posts);
  console.log(postId);

  useEffect(() => {
    const postToEdit =
      postIdToEdit.current && posts.find((post) => post.id === 3);
    console.log(postIdToEdit.current);
    console.log(posts);
    console.log(postId);

    title.current = postToEdit.title;
    content.current = postToEdit.content;
    metaTag.current = postToEdit.metaTag;
    document.getElementById("title").value = title.current;
    document.getElementById("content").value = content.current;
    document.getElementById("metaTag").value = metaTag.current;
    console.log(postId);
  }, []);

  const changePost = () => {
    const postObj = {
      id: postId,
      title: title.current,
      content: content.current,
      metaTag: metaTag.current,
    };
    dispatch(editPost(postObj));
    navigate("/AllPost");
  };
  return (
    <div>
      <h1>{postId}</h1>
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
            onChange={(e) => {
              title.current = e.target.value;
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
            onChange={(e) => {
              content.current = e.target.value;
            }}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="metaTag"
            id="metaTag"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter image URL"
            onChange={(e) => {
              metaTag.current = e.target.value;
            }}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={changePost}
        >
          {postId}
        </button>
      </form>
    </div>
  );
}

export default EditPost;
