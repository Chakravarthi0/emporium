import React from "react";
import { SingleProductCard, LoadingError } from "../../components/index";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/index";
import "./single-product.css";

function SingleProduct() {
  const { products } = useProducts();
  const { productId } = useParams();

  const product = products.find((product) => product._id === productId);

  return (
    <div>
      <h1 className="text-center page-head">Product detail</h1>
      {!product?._id && <LoadingError />}
      {product?._id && <SingleProductCard product={product} />}
    </div>
  );
}

export { SingleProduct };
