import React from "react";
import "./loader.css";

function Loader({ isFullScreen }) {
  return (
    <div
      className={
        "loader-container " + (isFullScreen ? "loader-full-screen" : "")
      }
    >
      <div className="loader"></div>
    </div>
  );
}

export {Loader};
