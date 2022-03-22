import React from "react";
import { useCart } from "../../context/CartContext";
import "./cart-card.css";

function CartCard({ product }) {
  const {
    title,
    brand,
    imgSrc,
    price: newPrice,
    oldPrice,
    qty: quantity,
    _id,
  } = product;

  let { changeQuantity, isLoading, removeFromCart } = useCart();

  return (
    <div className="cart-product-card">
      <div className="cart-product-img">
        <img className="img-responsive cart-img" src={`../../${imgSrc}`} />
      </div>
      <div className="product-details">
        <p className="product-title">{title}</p>
        <p className="product-brand">{brand}</p>
        <div className="product-price">
          <span className="new-price">
            ₹{Intl.NumberFormat("en-IN").format(newPrice)}
          </span>
          {oldPrice && (
            <span>
              <span>&nbsp;&nbsp;</span>
              <strike className="old-price">
                ₹{Intl.NumberFormat("en-IN").format(oldPrice)}
              </strike>
            </span>
          )}
        </div>
        <div className="quantity">
          quantity:
          <button
            disabled={isLoading || quantity < 2}
            className={
              "quantity-dec .bg-primary " + (quantity < 2 ? "no-cursor" : "")
            }
            onClick={() => changeQuantity(_id, "decrement")}
          >
            −
          </button>
          {quantity}
          <button
            disabled={isLoading}
            className="quantity-inc"
            onClick={() => changeQuantity(_id, "increment")}
          >
            +
          </button>
        </div>
        <button className="btn btn-primary btn-wide">Move to wishlist</button>
        <button
          disabled={isLoading}
          className="btn btn-danger btn-wide"
          onClick={() => removeFromCart(_id)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartCard;
