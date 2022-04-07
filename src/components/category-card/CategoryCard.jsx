import React from "react";
import { useFilter } from "../../context/index";
import {actionTypes} from "../../reducers/index"
import {useNavigate} from "react-router-dom";
import "./category-card.css";

function CategoryCard({ imgSrc, title, categoryName }) {

  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  const chooseCategory = () => {
    filterDispatch({type: actionTypes.SET_SINGLE_CATEGORY, payload: categoryName});
    navigate("/products");
  }

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
        <button className="btn btn-primary btn-wide" onClick={chooseCategory}>Browse</button>
      </div>
    </div>
  );
}

export {CategoryCard};
