import React, { useState } from "react";
import { useAddress } from "../../context";
import { AddressInputModal } from "../index";
import { useNavigate } from "react-router-dom";
import "./address-card.css";
import toast from "react-hot-toast";

function AddressCard({ address, isFromAddresses, isFromProfile }) {
  const [showModal, setShowModal] = useState(false);
  const { name, street, city, state, pincode, mobile, _id } = address;
  const {
    addressState: { chosenAddress },
    deleteAddress,
    setChosenAddress,
  } = useAddress();

  const navigate = useNavigate();

  const isChosen = chosenAddress._id === address._id;
  return (
    <div className="checkout-details">
      <div
        className={
          "address-details " +
          (!isFromAddresses ? "checkout-address " : "") +
          (isFromProfile ? "p-0" : "")
        }
      >
        <div>
          {showModal && (
            <AddressInputModal
              setShowModal={setShowModal}
              inputState={address}
              isEditing={true}
            />
          )}
          <h2 className="text-center">
            Address
            <i
              className="material-icons btn btn-dark btn-float address-edit-icon"
              onClick={() => {
                isFromAddresses ? setShowModal(true) : navigate("/address");
              }}
            >
              edit
            </i>
          </h2>
        </div>
        <p className="receiver-name">{name}</p>
        <p className="street">{street}</p>
        <p className="city">{city}</p>
        <p className="country">{`${state} - ${pincode}`}</p>
        <p className="mobile">{mobile}</p>
        {isFromAddresses && (
          <div className="address-actions">
            {!isChosen && (
              <button
                className="btn btn-primary"
                onClick={() => setChosenAddress(address)}
              >
                Set as active address
              </button>
            )}
            <i
              className="material-icons btn btn-dark btn-float"
              onClick={() => {
                isChosen
                  ? toast.error(
                      "Can not delete chosen address. Select a different address before deleting this one."
                    )
                  : deleteAddress(_id);
              }}
            >
              delete
            </i>
          </div>
        )}
        {isFromAddresses && isChosen && (
          <div className="tag bg-primary">Selected Address</div>
        )}
      </div>
    </div>
  );
}

export {AddressCard};
