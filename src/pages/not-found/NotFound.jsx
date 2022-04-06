import React from "react";
import { useNavigate } from "react-router-dom";
import "./not-found.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-page-container">
      <h1 className="loading-error-msg">Seems like you are lost...</h1>
      <button className="btn btn-primary black" onClick={() => navigate("/")}>
        Go back to home
      </button>
    </div>
  );
}

export { NotFound };
