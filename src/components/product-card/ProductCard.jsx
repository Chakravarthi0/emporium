import React, { useState, useEffect } from "react";
import { useCart, useAuth, useWishlist } from "../../context/index";
import { useNavigate } from "react-router-dom";
import "./product-card.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const {
    imgSrc,
    title,
    brand,
    oldPrice,
    price: newPrice,
    rating,
    inStock,
    _id,
  } = product;
  const { cartItems, addToCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlistItems.find((item) => item._id === _id);  
  const {
    authState: { token },
  } = useAuth();
  const [isLoading, setIsLoading] = useState({
    cart: false,
    wishlist: false,
  });
  return (
    <div className="card product-card">
      {!inStock && (
        <div className="overlay-container">
          <p className="tag availability-tag bg-danger white-pure">
            Out of stock
          </p>
        </div>
      )}
      <div className="product-img-container">
        <img className="product-img img-responsive" onClick={() => navigate(`/product/${_id}`)} src={`../../${imgSrc}`} />
      </div>
      <p className="product-title">{title}</p>
      <p className="product-brand">{brand}</p>
      <div className="product-price">
        <div className="rated" style={{ "--stars": rating }}></div>
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
      <div className="card-actions">
        {token ? (
          cartItems.find((item) => item._id === _id) ? (
            <button
              className="btn btn-primary-ol btn-wide"
              onClick={() => navigate("/cart")}
            >
              Go to cart
            </button>
          ) : (
            <button
              disabled={isLoading.cart}
              className="btn btn-primary btn-wide"
              onClick={() => addToCart(product, setIsLoading)}
            >
              {isLoading.cart ? (
                <img className="loader-img" src="/assests/spinner.svg"></img>
              ) : (
                "Add to cart"
              )}
            </button>
          )
        ) : (
          <button
            className="btn btn-primary btn-wide"
            onClick={() => navigate("/signin")}
          >
            Add to cart
          </button>
        )}
      </div>
      <button
        disabled={isLoading.wishlist}
        className={
          "material-icons wishlist-icon " +
          (isInWishlist ? "danger" : "") +
          (!inStock ? " wishlist-overlay" : "")
        }
        onClick={
          token
            ? isInWishlist
              ? () => removeFromWishlist(_id)
              : () => addToWishlist(product, setIsLoading)
            : () => navigate("/signin")
        }
      >
        {isInWishlist ? "favorite" : "favorite_border"}
      </button>
    </div>
  );
}

export default ProductCard;
