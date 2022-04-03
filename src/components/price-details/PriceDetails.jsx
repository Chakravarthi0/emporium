import React, { useState } from "react";
import { useCart } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { CouponModal } from "../index";
import "./price-details.css";

function PriceDetails({ isFromCheckout }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenCoupon, setChosenCoupon] = useState("");
  const { cartItems } = useCart();
  const navigate = useNavigate();

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

    let couponDiscount = 0;

    if (chosenCoupon) {
      if (chosenCoupon === "500OFF" && result.totalItemsPrice >=5000) {
        couponDiscount = 500;
      } else if (chosenCoupon === "10%OFF" && result.totalItemsPrice >=10000) {
        couponDiscount = result.totalItemsPrice * (1 / 10);
      }
    }

    return {
      ...result,
      couponDiscount,
      deliveryCharge: cartItems.length > 0 ? 100 : 0,
      total:
        result.totalItemsPrice +
        (cartItems.length > 0 ? 100 : 0) -
        couponDiscount,
    };
  };

  let result = calculatePrice();

  return (
    <div className="price-details">
      {isFromCheckout && isModalOpen && (
        <CouponModal
          total={result.total}
          setIsModalOpen={setIsModalOpen}
          chosenCoupon={chosenCoupon}
          setChosenCoupon={setChosenCoupon}
        />
      )}
      <h2>Price details</h2>
      {isFromCheckout && (
        <div className="coupon-container">
          <p>Got a coupon?</p>
          <button
            modal-btn-for="coupon"
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            Apply coupon
          </button>
        </div>
      )}
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

        {result.totalDiscount > 0 && (
          <li className="price-details-list">
            <p>Discount</p>
            <p>-₹{Intl.NumberFormat("en-IN").format(result.totalDiscount)}</p>
          </li>
        )}

        {result.couponDiscount > 0 && (
          <li className="price-details-list">
            <p>Coupon discount ({chosenCoupon})</p>
            <p>-₹{Intl.NumberFormat("en-IN").format(result.couponDiscount)}</p>
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
      {result.totalDiscount > 0 && (
        <p className="savings">
          You will save ₹
          {Intl.NumberFormat("en-IN").format(result.totalDiscount + result.couponDiscount)} on this
          order
        </p>
      )}
      <button
        className="btn btn-success btn-wide btn-place-order"
        onClick={() => { !isFromCheckout && navigate("/checkout")}}
      >
        {isFromCheckout ? "Make Payment" : "Place order"}
      </button>
    </div>
  );
}

export default PriceDetails;
