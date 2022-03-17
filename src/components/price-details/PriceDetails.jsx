import React from "react";
import "./price-details.css";

function PriceDetails() {
  return (
    <div className="price-details">
      <h2>Price details</h2>
      <hr />
      <br />
      <ul className="price-list">
        <li className="price-details-list">
          <p>Price(2 items)</p>
          <p>₹{Intl.NumberFormat('en-IN').format(499999)}</p>
        </li>

        <li className="price-details-list">
          <p>Discount</p>
          <p>₹{Intl.NumberFormat('en-IN').format(499999)}</p>
        </li>

        <li className="price-details-list">
          <p>Delivery charges</p>
          <p>₹{Intl.NumberFormat('en-IN').format(499999)}</p>
        </li>
        <hr />
        <li className="price-details-list">
          <p>Total price</p>
          <p>₹{Intl.NumberFormat('en-IN').format(499999)}</p>
        </li>
        <hr />
      </ul>
      <p className="savings">You will save 888 on this order</p>
      <button className="btn btn-success btn-wide">Place order</button>
    </div>
  );
}

export default PriceDetails;
