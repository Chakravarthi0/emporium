import React from "react";
import { useCart } from "../../context/index";
import "./price-details.css";

function PriceDetails() {
  const { cartItems } = useCart();

  const priceReducer = (acc, curr) => {
    const discount = curr.oldPrice
      ? (curr.oldPrice - curr.price) * curr.qty
      : 0;
    return {
      totalItems: acc.totalItems + curr.qty,
      totalItemsPrice: acc.totalItemsPrice + curr.price * curr.qty,
      totalDiscount: acc.totalDiscount + discount,
    };
  };
  const calculatePrice = () => {
    let result = cartItems.reduce(priceReducer, {
      totalItems: 0,
      totalItemsPrice: 0,
      totalDiscount: 0,
    });

    return {
      ...result,
      deliveryCharge: cartItems.length > 0 ? 100 : 0,
      total: result.totalItemsPrice + (cartItems.length > 0 ? 100 : 0),
    };
  };

  let result = calculatePrice();

  return (
    <div className="price-details">
      <h2>Price details</h2>
      <hr />
      <br />
      <ul className="price-list">
        <li className="price-details-list">
          <p>
            Price({result.totalItems} {result.totalItems > 1 ? "items" : "item"}
            )
          </p>
          <p>₹{Intl.NumberFormat("en-IN").format(result.totalItemsPrice)}</p>
        </li>

        {(result.totalDiscount > 0) && (
          <li className="price-details-list">
            <p>Discount</p>
            <p>-₹{Intl.NumberFormat("en-IN").format(result.totalDiscount)}</p>
          </li>
        )}

        <li className="price-details-list">
          <p>Delivery charges</p>
          <p>₹{Intl.NumberFormat("en-IN").format(result.deliveryCharge)}</p>
        </li>
        <hr />
        <li className="price-details-list">
          <p>Total price</p>
          <p>₹{Intl.NumberFormat("en-IN").format(result.total)}</p>
        </li>
        <hr />
      </ul>
      {(result.totalDiscount > 0) && (
        <p className="savings">
          You will save ₹
          {Intl.NumberFormat("en-IN").format(result.totalDiscount)} on this
          order
        </p>
      )}
      <button className="btn btn-success btn-wide btn-place-order">
        Place order
      </button>
    </div>
  );
}

export default PriceDetails;
