import React, { useState } from "react";
import { AddressCard, AddressInputModal, Loader } from "../../components";
import { useAddress } from "../../context";
import "./address.css";

function Address() {
  const [showModal, setShowModal] = useState(false);
  const {
    addressState: { addresses, loading },
    addAddress,
  } = useAddress();

  const addDefaultAddress = () => {
    addAddress({
      name: "John Doe",
      street: "221B Baker Street",
      city: "Marylebone",
      state: "Westminster",
      pincode: "123456",
      mobile: "12345678",
    });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showModal && <AddressInputModal setShowModal={setShowModal} />}
          <div className="text-center">
            <h1 className="page-title">Address Management</h1>
            <div className="address-cta-container">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Add new address
              </button>

              <button
                className="btn btn-primary-ol"
                onClick={addDefaultAddress}
              >
                Add default address
              </button>
            </div>
          </div>

          <div className="addresses-container">
            {addresses.length > 0 &&
              addresses.map((address) => (
                <AddressCard
                  key={address._id}
                  address={address}
                  isFromAddresses={true}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export { Address };
