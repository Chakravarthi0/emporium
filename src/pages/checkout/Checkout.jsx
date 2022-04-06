import React from "react";
import {
  CartCard,
  PriceDetails,
  AddressCard,
  LoadingError,
} from "../../components";
import { useCart } from "../../context/index";
import "./checkout.css";
function Checkout() {
  const { cartItems } = useCart();
  return (
    <>
      <h1 className="text-center page-title">Checkout ({cartItems.length})</h1>
      {cartItems.length === 0 && <LoadingError />}
      <div className="cart-container">
        <div className="cart-products">
          {cartItems.map((product) => {
            return <CartCard key={product._id} product={product} />;
          })}
        </div>
        <div className="checkout-details-container">
          {cartItems.length > 0 && (
            <>
              <AddressCard />
              <PriceDetails isFromCheckout={true} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
