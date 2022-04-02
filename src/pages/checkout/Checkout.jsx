import React from "react";
import { CartCard, PriceDetails, AddressCard } from "../../components";
import { useCart } from "../../context/index";
function Checkout() {
  const { cartItems } = useCart();
  return (
    <>
      <h1 className="text-center page-title">Checkout ({cartItems.length})</h1>
      <div className="cart-container">
        <div className="cart-products">
          {cartItems.map((product) => {
            return <CartCard key={product._id} product={product} />;
          })}
        </div>
        <div>
          <AddressCard />
          { (cartItems.length>0) && <PriceDetails isFromCheckout={true} />}
        </div>
      </div>
    </>
  );
}

export default Checkout;
