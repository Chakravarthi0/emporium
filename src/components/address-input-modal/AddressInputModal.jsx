import React, { useState } from "react";
import { useAddress } from "../../context";
import toast from "react-hot-toast";
import "./address-input-modal.css";

const defaultInputState = {
  name: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  mobile: "",
};
function AddressInputModal({
  setShowModal,
  inputState = defaultInputState,
  isEditing,
}) {
  const [addressInputs, setAddressInputs] = useState(inputState);
  const { name, street, city, state, pincode, mobile } = addressInputs;

  const { addAddress, updateAddress } = useAddress();

  const submitHandler = () => {
    if (
      name.trim().length &&
      street.trim().length &&
      city.trim().length &&
      state.trim().length &&
      pincode.trim().length &&
      mobile.trim().length
    ) {
      if (isEditing) {
        updateAddress(inputState._id, addressInputs);
      } else {
        addAddress(addressInputs);
      }
      setShowModal(false);
    } else {
      toast.error("Please make sure that you have entered all the details");
    }
  };
  return (
    <div>
      <div className="modal-bg">
        <div className="modal position-rel">
          <h2 className="text-large list-head">Add address</h2>
          <i
            className="material-icons modal-close-btn position-abs top-0 right-0"
            onClick={() => setShowModal(false)}
          >
            close
          </i>
          <div className="address-inputs-container">
            <label>
              <p>Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setAddressInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              <p>Street</p>
              <input
                type="text"
                value={street}
                onChange={(e) =>
                  setAddressInputs((prev) => ({
                    ...prev,
                    street: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              <p>State</p>
              <input
                type="text"
                value={state}
                onChange={(e) =>
                  setAddressInputs((prev) => ({
                    ...prev,
                    state: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              <p>City</p>
              <input
                type="text"
                value={city}
                onChange={(e) =>
                  setAddressInputs((prev) => ({
                    ...prev,
                    city: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              <p>Pincode</p>
              <input
                type="number"
                value={pincode}
                onChange={(e) =>
                  setAddressInputs((prev) => ({
                    ...prev,
                    pincode: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              <p>mobile</p>
              <input
                type="tel"
                value={mobile}
                onChange={(e) =>
                  setAddressInputs((prev) => ({
                    ...prev,
                    mobile: e.target.value,
                  }))
                }
              />
            </label>
          </div>
          <div className="modal-actions">
            <button
              className="btn btn-primary modal-close-btn"
              onClick={submitHandler}
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddressInputModal };
