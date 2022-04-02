import React from "react";
import { CartCard, PriceDetails } from "../../components";
import { useCart } from "../../context/index";
import "./cart.css";

function Cart() {
  const { cartItems } = useCart();
  return (
    <>
      <h1 className="text-center page-title">My Cart ({cartItems.length})</h1>
      <div className="cart-container">
        <div className="cart-products">
          {cartItems.map((product) => {
            return <CartCard key={product._id} product={product} />;
          })}
        </div>
        { (cartItems.length > 0) && <PriceDetails />}
      </div>
    </>
  );
}

export default Cart;
