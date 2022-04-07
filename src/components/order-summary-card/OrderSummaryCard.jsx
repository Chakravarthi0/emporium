import React from "react";
import "./order-summary-card.css";

function OrderSummaryCard({ products, couponDiscount, total }) {
  return (
    <div>
      {products.length > 0 && (
        <div className="price-details order-summary-card">
          <h2>Order Summary</h2> <hr />
          <br />
          <ul className="price-list">
            <li className="price-details-list"></li>
            {products.map((product) => (
              <li key={product._id} className="price-details-list">
                <div>{`${product.title} - (${product.qty})`}</div>
                <div>
                  ₹
                  {Intl.NumberFormat("en-IN").format(
                    product.price * product.qty
                  )}
                </div>
              </li>
            ))}

            <li className="price-details-list">
              <p>Delivey Charge</p>
              <p>₹100</p>
            </li>

            <li className="price-details-list">
              <p>couponDiscount</p>
              <p>-₹{Intl.NumberFormat("en-IN").format(couponDiscount)}</p>
            </li>
            <hr />
            <li className="price-details-list">
              <p>Total price</p>
              <p>₹{Intl.NumberFormat("en-IN").format(total)}</p>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </div>
  );
}

export {OrderSummaryCard};
