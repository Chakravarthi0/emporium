import React from "react";
import "./scroll-to-top.css";

function ScrollToTop() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="scroll-to-top-container">
      <button
        className="btn btn-primary btn-float btn-scroll-to-top"
        onClick={scrollUp}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export {ScrollToTop};
