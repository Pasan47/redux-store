import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goToAddPost = () => {
    navigate("/AddPost");
  };
  const goToAddUser = () => {
    navigate("/AddUser");
  };
  const displayUser = () => {
    navigate("/AllUsers");
  };
  return (
    <>
      <div className="grid-cols-12">
        <div className="col-span-6">
          <button type="submit" onClick={goToAddPost}>
            Go to add post
          </button>
        </div>
        <div className="col-span-6">
          <button type="sumbit" onClick={goToAddUser}>
            Go to add user
          </button>
        </div>
        <div className="col-span-6">
          <button type="submit" onClick={displayUser}>
            Display User
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
