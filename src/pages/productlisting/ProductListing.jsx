import React from "react";
import { useProducts } from "../../context";
import { ProductCard, Loader,LoadingError } from "../../components";
import Filter from "./Filter";
import "./product-listing.css";

function ProductListing() {
  let {
    products,
    isLoading: isProductLoading,
    error: productLoadingError,
  } = useProducts();

  return (
    <>
      {/* loading Screen */}
      {isProductLoading && (
        <>
        <h1 className="text-center page-title ">Products</h1>
          <Loader isFullScreen={true} />
        </>
      )}

      {/* error screen */}

      {productLoadingError && (
        <>
        <h1 className="text-center page-title ">Products</h1>
        <LoadingError />
        </>
      )}

      {products.length > 0 && (
        <div className="product-page-body ">
          <Filter />
          <div className="product-main">
            {/* displayed if products are fetched successfully, at the center of products-main container */}
            <h1 className="text-center page-title ">Products</h1>
            <div className="product-top">
              <div className="filter-icon-container">
                filter
                <i className="material-icons">filter_alt</i>
              </div>
            </div>
            <div className="products-container">
              {products.map((ele) => {
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
      )}
    </>
  );
}

export default ProductListing;
