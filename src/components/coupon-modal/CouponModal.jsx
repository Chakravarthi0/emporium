import React from "react";
import "./coupon-modal.css";

function CouponModal({ setIsModalOpen, total, chosenCoupon, setChosenCoupon }) {
  return (
    <div className="modal-bg">
      <div className="modal position-rel">
        <h2 className="text-large list-head">Apply coupon</h2>
        <i
          modal-btn-for="coupon"
          className="material-icons modal-close-btn position-abs top-0 right-0"
          onClick={() => setIsModalOpen(false)}
        >
          close
        </i>
        <div className="coupon-list">
          <label className={`coupon-label ` + (total < 5000 ? "disabled" : "")}>
            <input
              type="radio"
              name="coupon"
              className={total < 5000 ? "disabled" : ""}
              checked={chosenCoupon === "500OFF"}
              onChange={() => {
                setChosenCoupon("500OFF");
              }}
              disabled={total < 5000}
            />
            <p className="category-name">500 OFF</p>
            <p>500 rs off on purchase above 5000 rs</p>
          </label>
          <label
            className={`coupon-label ` + (total < 10000 ? "disabled" : "")}
          >
            <input
              type="radio"
              name="coupon"
              className={total < 10000 ? "disabled" : ""}
              checked={chosenCoupon === "10%OFF"}
              onChange={() => {
                setChosenCoupon("10%OFF");
              }}
              disabled={total < 10000}
            />
            <p className="category-name">10% OFF</p>
            <p>Flat 10% off on purchase above 10000 rs</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CouponModal;
