import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ childern }) {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    } else {
    }
    setLoader(false);
  }, [authStatus, navigate]);
  return loader ? <div>Loading...</div> : <>{childern}</>;
}

export default Protected;
