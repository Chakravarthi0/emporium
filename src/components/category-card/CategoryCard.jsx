import React from "react";
import {Link} from "react-router-dom";
import "./category-card.css";

function CategoryCard({ imgSrc, title, linkTO }) {
  return (
    <div className="card product-card">
      <div className="product-img-container">
        <img
          className="product-img img-responsive"
          src={`../../${imgSrc}`} 
        />
      </div>
      <p className="card-title">{title}</p>
      <div className="card-actions">
        <Link className="btn-wide" to={linkTO}>
        <button className="btn btn-primary btn-wide">Browse</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
