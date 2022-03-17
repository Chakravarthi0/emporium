import React from "react";
import "./home.css";
import "../../../public/assests/hero-section/Shopping_Outline.svg";
import { ProductCard } from "../../components";
import { topPicks } from "../../backend/db/products";
import { Link } from "react-router-dom";

function HomePage() {
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

      {/* <!-- Top picks --> */}

      <div className="top-picks-container">
        <h1 className="text-center">Top picks for you</h1>

        <div className="top-picks">
          {topPicks.map((ele) => {
            return (
              <ProductCard
                key={ele._id}
                title={ele.title}
                brand={ele.brand}
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

export default HomePage;
