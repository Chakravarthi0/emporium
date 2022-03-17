import React from "react";
import { topPicks } from "../../backend/db/products";
import { ProductCard } from "../../components";
import "./wishlist.css"
function WishList() {
  return (
    <>
      <h1 className="text-center page-title">Wishlist</h1>
    <div className="wishlist-container">
      {topPicks.map((ele) => {
        return (
          <ProductCard
            key={ele._id}
            title={ele.title}
            brand={ele.brand}
            rating={ele.rating}
            oldPrice={ele.oldPrice}
            newPrice={ele.price}
            imgSrc={ele.imgSrc}
          />
        );
      })}
      
    </div>
    </>
  );
}

export default WishList;
