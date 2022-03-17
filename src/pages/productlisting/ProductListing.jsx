import React from "react";
import { topPicks } from "../../backend/db/products";
import { ProductCard } from "../../components";
import Filter from "./Filter";
import "./product-listing.css";

function ProductListing() {
  return (
    <div className="product-page-body">
      <Filter />
      <div className="product-main">
        <h1 className="text-center page-title ">Products</h1>
        <div className="product-top">
          <div className="filter-icon-container">
            filter
            <i className="material-icons">filter_alt</i>
          </div>
        </div>
        <div className="products-container">
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
      </div>
    </div>
  );
}

export default ProductListing;
