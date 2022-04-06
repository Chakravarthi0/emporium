import React from "react";
import { useOrders } from "../../context";
import { LoadingError, OrderSummaryCard } from "../../components";
import { useNavigate } from "react-router-dom";
import "./order-summary.css";

function OrderSummary() {
  const {
    ordersState: {
      latestOrder: { products, couponDiscount, total },
    },
  } = useOrders();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center page-title">Order summary</h1>
      {products.length > 0 ? (
        <>
          <OrderSummaryCard
            products={products}
            couponDiscount={couponDiscount}
            total={total}
          />
          <div className="text-center">
            <h3>You can track your orders from 'my orders' page</h3>
            <button
              className="btn btn-primary mt-2 mb-2"
              onClick={() => navigate("/orders")}
            >
              Go to my orders page
            </button>
          </div>
        </>
      ) : (
        <LoadingError />
      )}
    </div>
  );
}

export { OrderSummary };
