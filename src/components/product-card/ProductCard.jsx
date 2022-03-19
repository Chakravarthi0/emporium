import React, { useState } from "react";
import "./product-card.css";

function ProductCard({ imgSrc, title, brand, oldPrice, newPrice, rating, inStock }) {
  const [isWishlisted, setISWishlisted] = useState(false);
  const handleWishlist = () => {
    setISWishlisted((p) => !p);
  };
  return (
    <div className="card product-card">
      {!inStock && <div className="overlay-container">
        <p className="tag availability-tag bg-danger white-pure">Out of stock</p>
        </div>}
      <div className="product-img-container">
        <img className="product-img img-responsive" src={`../../${imgSrc}`} />
      </div>
      <p className="product-title">{title}</p>
      <p className="product-brand">{brand}</p>
      <div className="product-price">
      <div className="rated" style={{"--stars": rating}}>

      </div>
        <span className="new-price">₹{Intl.NumberFormat('en-IN').format(newPrice)}</span>
        {oldPrice && (
          
          <span>
            <span>&nbsp;&nbsp;</span>
            <strike className="old-price">₹{Intl.NumberFormat('en-IN').format(oldPrice)}</strike>
          </span>
        )}
      </div>
      <div className="card-actions">
        <button className="btn btn-primary btn-wide">Add to cart</button>
      </div>
      <i
        className={
          "material-icons wishlist-icon " + (isWishlisted ? "danger" : "") + (!inStock ? " wishlist-overlay" : "")
        }
        onClick={handleWishlist}
      >
        {isWishlisted ? "favorite" : "favorite_border"}
      </i>
    </div>
  );
}

export default ProductCard;
