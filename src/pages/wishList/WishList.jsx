import React from "react";
import { useWishlist } from "../../context/index";
import { ProductCard } from "../../components";
import "./wishlist.css";
function WishList() {
  const { wishlistItems } = useWishlist();
  return (
    <>
      <h1 className="text-center page-title">
        Wishlist({wishlistItems.length}){" "}
      </h1>
      <div className="wishlist-container">
        {wishlistItems.map((product) => {
          return <ProductCard key={product._id} product={product} />        })}
      </div>
    </>
  );
}

export {WishList};
