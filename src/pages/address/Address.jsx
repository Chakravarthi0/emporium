import React, { useState } from "react";
import { AddressCard, AddressInputModal, Loader } from "../../components";
import { useAddress } from "../../context";
import "./address.css";

function Address() {
  const [showModal, setShowModal] = useState(false);
  const {
    addressState: { addresses, loading },
  } = useAddress();
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showModal && <AddressInputModal setShowModal={setShowModal} />}
          <div className="text-center">
            <h1 className="page-title">Address Management</h1>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Add new address
            </button>
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
