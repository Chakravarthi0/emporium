import React from "react";
import { CartCard } from "../../components";
import { useOrders } from "../../context";
import "./orders.css";

function Orders() {
  const {
    ordersState: { orders },
  } = useOrders();

  return (
    <>
      <h1 className="text-center page-title">My Orders</h1>
      {!orders.length && (
        <h3 className="text-center">You have not ordered anything yet :(</h3>
      )}
      <div className="order-summary-container">
        {orders.length > 0 &&
          orders.map((product) => {
            return <CartCard key={product._id} product={product} />;
          })}
      </div>
    </>
  );
}

export { Orders };
