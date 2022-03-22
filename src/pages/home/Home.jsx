import React from "react";
import "./home.css";
import "../../../public/assests/hero-section/Shopping_Outline.svg";
import {
  ProductCard,
  CategoryCard,
  Loader,
  LoadingError,
} from "../../components";
import { Link } from "react-router-dom";
import { useProducts, useCategories } from "../../context";

function HomePage() {
  const {
    products,
    isLoading: isProductLoading,
    error: productError,
  } = useProducts();

  const {
    categories,
    isLoading: isCategoriesLoading,
    error: categoryError,
  } = useCategories();

  const topPickProducts = products.filter((ele) => ele.isTopPick);
  return (
    <div>
      {/* Hero section */}
      <div className="hero-container">
        <img
          className="hero-illustration"
          src="/assests/hero-section/Shopping_Outline.svg"
          alt=""
        />
        <div className="hero-description">
          <p>Welcome to</p>
          <h1 className="store-name">Emporium</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            corporis nobis veniam.
          </p>
          <Link className="link" to={"/products"}>
            <button className="btn btn-primary btn-lg">shop</button>
          </Link>
        </div>
      </div>

      {/* categories */}

      {isCategoriesLoading && (
        <div>
          <h1 className="text-center page-title">Categories</h1>
          <Loader />
        </div>
      )}

      {categoryError && (
        <div>
          <h1 className="text-center page-title">Categories</h1>
          <LoadingError />
        </div>
      )}

      {categories.length > 0 && (
        <div className="categories-container">
          <h1 className="text-center page-title">Categories</h1>
          <div className="categories">
            {categories.map((ele) => {
              return (
                <CategoryCard
                  key={ele._id}
                  title={ele.title}
                  imgSrc={ele.imgSrc}
                  linkTO={ele.link}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* <!-- Top picks --> */}

      <div className="top-picks-container">
        <h1 className="text-center page-title">Top picks for you</h1>

        {isProductLoading && <Loader />}

        {productError && <LoadingError />}

        {topPickProducts.length > 0 && (
          <div className="top-picks">
            {topPickProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
