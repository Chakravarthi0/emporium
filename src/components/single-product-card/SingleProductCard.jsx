import React,{useState} from "react";
import {useCart,
    useAuth,
    useWishlist,} from "../../context/index"
import { useNavigate } from "react-router-dom";
import "./single-product-card.css";

function SingleProductCard({ product }) {
    const [isLoading, setIsLoading] = useState({
        cart: false,
        wishlist: false,
      });
    
      const navigate = useNavigate();
    
      const { cartItems, addToCart } = useCart();
      const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
      const isInWishlist = wishlistItems.find((item) => item._id === product?._id);
      const {
        authState: { token },
      } = useAuth();
  return (
    <>
      {product?._id && (
          <>

          <div className="sigle-product-detail">
            <div className="single-product-img">
              <img
                className="img-responsive"
                src={`../../${product?.imgSrc}`}
              />
            </div>

            <div className="product-details">
              <h1 className="single-product-title">{product?.title}</h1>
              <p className="single-product-brand">{product?.brand}</p>
              <div className="product-price">
                <span className="single-new-price">
                  ₹{Intl.NumberFormat("en-IN").format(product?.price)}
                </span>
                {product?.oldPrice && (
                  <span>
                    <span>&nbsp;&nbsp;</span>
                    <strike className="old-price">
                      ₹{Intl.NumberFormat("en-IN").format(product?.oldPrice)}
                    </strike>
                  </span>
                )}
              </div>
              <div className="rating-container">
                <span
                  className="rated"
                  style={{ "--stars": product?.rating }}
                ></span>
                <span className="text-large">(300 reviews)</span>
                <p>inclusive of all taxes</p>
              </div>
              <div className="product-details-btns">
                {token ? (
                  cartItems.find((item) => item._id === product?._id) ? (
                    <button
                      className="btn btn-primary-ol"
                      onClick={() => navigate("/cart")}
                    >
                      Go to cart
                    </button>
                  ) : (
                    <button
                      disabled={isLoading.cart}
                      className="btn btn-primary"
                      onClick={() => addToCart(product, setIsLoading)}
                    >
                      {isLoading.cart ? (
                        <img
                          className="loader-img"
                          src="/assests/spinner.svg"
                        ></img>
                      ) : (
                        "Add to cart"
                      )}
                    </button>
                  )
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/signin")}
                  >
                    Add to cart
                  </button>
                )}
                {isInWishlist ? (
                  <button
                    className="btn btn-primary-ol"
                    onClick={() => removeFromWishlist(product?._id)}
                  >
                    Remove from wishlist
                  </button>
                ) : (
                  <button
                    disabled={isLoading.wishlist}
                    className="btn btn-primary-ol"
                    onClick={() => addToWishlist(product, setIsLoading)}
                  >
                    Add to wishlist
                  </button>
                )}
              </div>
              <div className="product-details-description">
                <h2 className="description-head">Description</h2>
                <p className="description-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                  alias soluta repudiandae deserunt. Illo harum repellendus
                  nihil mollitia iure in, necessitatibus enim ab, cum reiciendis
                  exercitationem tempora vero?
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { SingleProductCard };
