import React from "react";
import {
  CartCard,
  PriceDetails,
  AddressCard,
  LoadingError,
} from "../../components";
import { useCart, useAddress } from "../../context/index";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
function Checkout() {
  const { cartItems } = useCart();
  const {
    addressState: { chosenAddress },
  } = useAddress();
  const navigate = useNavigate();
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
              {chosenAddress.name ? (
                <AddressCard address={chosenAddress} />
              ) : (
                <button
                  className="btn btn-primary choose-address-btn"
                  onClick={() => navigate("/address")}
                >
                  Choose an address
                </button>
              )}
              <PriceDetails isFromCheckout={true} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
