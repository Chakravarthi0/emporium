import React,{useState} from "react";
import { useProducts, useFilter } from "../../context";
import { ProductCard, Loader, LoadingError } from "../../components";
import Filter from "./Filter";
import "./product-listing.css";

function ProductListing() {

  const [displayFilters, setDisplayFilters] = useState(false);

  const toggleDisplayFilters = () => {
    setDisplayFilters(prev => !prev);
  }

  let {
    products,
    isLoading: isProductLoading,
    error: productLoadingError,
  } = useProducts();

  const { filterState } = useFilter();

  let filteredProducts = products;

  const filterProducts = () => {
    if(filterState.includeOutOfStock === false){
      filteredProducts = filteredProducts.filter(ele => ele.inStock)
    }
    filteredProducts = filteredProducts
    .filter((ele) => ele.price <= filterState.maxPrice)
    .filter(ele => ele.rating >= filterState.rating)
    if(filterState.categories.length > 0){

      filteredProducts= filteredProducts.filter((ele) => filterState.categories.includes(ele.category))
    }
    if(filterState.sortBy === "ascending"){
      filteredProducts= filteredProducts.sort((a,b) => a.price - b.price)
    }else if((filterState.sortBy === "descending")){
      filteredProducts= filteredProducts.sort((a,b) => b.price - a.price)
    }
  };
  filterProducts();

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
          <Filter displayFilters={displayFilters} toggleDisplayFilters={toggleDisplayFilters}/>
          <div className={"product-main " + (filteredProducts.length < 1 ? "product-main-wide":"")}>
            {/* displayed if products are fetched successfully, at the center of products-main container */}
            <h1 className="text-center page-title ">Products</h1>
            <div className="product-top">
              <div className="filter-icon-container">
                <button className="btn btn-primary  btn-float black" onClick={toggleDisplayFilters}>
                <i className="material-icons black ">filter_alt</i>
                </button>
              </div>
            </div>
            <div className="products-container">
              {filteredProducts.map((ele) => {
                return (
                  <ProductCard
                    key={ele._id}
                    title={ele.title}
                    brand={ele.brand}
                    rating={ele.rating}
                    oldPrice={ele.oldPrice}
                    newPrice={ele.price}
                    imgSrc={ele.imgSrc}
                    inStock = {ele.inStock}
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
