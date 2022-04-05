import React, { useState } from "react";
import { useCart, useWishlist } from "../../context/index";
import toast from "react-hot-toast";
import "./cart-card.css";

function CartCard({ product, isFromCart }) {
  const {
    title,
    brand,
    imgSrc,
    price: newPrice,
    oldPrice,
    qty: quantity,
    _id,
  } = product;

  let { changeQuantity, isLoading: isCartLoading, removeFromCart } = useCart();
  const {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isLoading: isWishlistLoading,
  } = useWishlist();

  const [isLoading, setIsLoading] = useState({
    cart: false,
    wishlist: false,
  });

  const isInWishlist = wishlistItems.find((item) => item._id === _id);

  const moveToCart = () => {
    addToWishlist(product, setIsLoading);
    removeFromCart(_id);
    toast.success("Item added to wishlist");
  };

  return (
    <div className="cart-product-card">
      <div className="cart-product-img">
        <img className="img-responsive cart-img" src={`../../${imgSrc}`} />
      </div>
      <div
        className={
          "product-details " + (!isFromCart ? "justify-center" : "")
        }
      >
        <p className="product-title">{title}</p>
        <p className="product-brand">{brand}</p>
        <div className="product-price">
          <span className="new-price">
            ₹{Intl.NumberFormat("en-IN").format(newPrice)}
          </span>
          {(isFromCart && oldPrice) && (
            <span>
              <span>&nbsp;&nbsp;</span>
              <strike className="old-price">
                ₹{Intl.NumberFormat("en-IN").format(oldPrice)}
              </strike>
            </span>
          )}
        </div>
        {isFromCart && (
          <>
            <div className="quantity">
              quantity:
              <button
                disabled={isLoading.cart || quantity < 2}
                className={
                  "quantity-dec .bg-primary " +
                  (quantity < 2 ? "no-cursor" : "")
                }
                onClick={() => changeQuantity(_id, "decrement", setIsLoading)}
              >
                −
              </button>
              {quantity}
              <button
                disabled={isLoading.cart}
                className="quantity-inc"
                onClick={() => changeQuantity(_id, "increment", setIsLoading)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-primary btn-wide"
              disabled={isLoading.wishlist}
              onClick={
                !isInWishlist
                  ? () => {
                      moveToCart();
                    }
                  : () => {
                      removeFromCart(_id, setIsLoading);
                    }
              }
            >
              {isLoading.wishlist ? (
                <img className="loader-img" src="/assests/spinner.svg"></img>
              ) : (
                "Move to wishlist"
              )}
            </button>
            <button
              disabled={isCartLoading}
              className="btn btn-danger btn-wide"
              onClick={() => removeFromCart(_id)}
            >
              Remove from cart
            </button>
          </>
        )}

        {!isFromCart && (
          <>
          <div className="quantity">{`Quantity: ${quantity}`}</div>
          <div>Status: Ordered</div>
          {product.orderedAt && (
            <div>Ordered on: {product.orderedAt}</div>
          )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartCard;
