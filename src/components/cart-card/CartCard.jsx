import React, { useState } from "react";
import "./cart-card.css";

function CartCard({ title, brand, imgSrc, newPrice, oldPrice, quantity }) {
  const [chosenQuantity, setChosenQuantity] = useState(quantity || 1);

  const increaseQuantity = () => {
    setChosenQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setChosenQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };
  return (
    <div className="cart-product-card">
      <div className="cart-product-img">
        <img className="img-responsive cart-img" src={`../../${imgSrc}`} />
      </div>
      <div className="product-details">
        <p className="product-title">{title}</p>
        <p className="product-brand">{brand}</p>
        <div className="product-price">
          <span className="new-price">₹{newPrice}</span>
          {oldPrice && (
            <span>
              <span>&nbsp;&nbsp;</span>
              <strike className="old-price">₹{oldPrice}</strike>
            </span>
          )}
        </div>
        <div className="quantity">
          quantity:
          <button
            disabled={chosenQuantity < 2}
            className={
              "quantity-dec .bg-primary " +
              (chosenQuantity < 2 ? "no-cursor" : "")
            }
            onClick={decreaseQuantity}
          >
            −
          </button>
          <input
            className="cart-quantity-inp"
            type="number"
            value={chosenQuantity}
            onChange={(e) => {
              console.log(e.target.value);
              setChosenQuantity(e.target.value);
            }}
          />
          <button className="quantity-inc" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button className="btn btn-primary btn-wide">Move to wishlist</button>
        <button className="btn btn-danger btn-wide">Remove from cart</button>
      </div>
    </div>
  );
}

export default CartCard;
