import React from "react";
import "./address-card.css";

function AddressCard() {
  return (
    <div className="checkout-details">
      <div className="address-details">
        <div>
          <h2 className="text-center">
            Address
            <i className="material-icons btn btn-dark btn-float address-edit">
              edit
            </i>
          </h2>
        </div>
        <p className="receiver-name">Sherlock Holmes</p>
        <p className="street">221B Baker Street</p>
        <p className="city">Marylebone, Westminster</p>
        <p className="country">London</p>
      </div>
    </div>
  );
}

export default AddressCard;
