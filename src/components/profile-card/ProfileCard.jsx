import React from "react";
import { useAuth, useAddress } from "../../context/index";
import { AddressCard } from "../../components";
import { useNavigate } from "react-router-dom";
import "./profile-card.css";

function ProfileCard() {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const { signOut } = useAuth();
  const {
    addressState: { chosenAddress },
  } = useAddress();

  return (
    <div>
      <div className="sign-x-form-container">
        <div className="sign-x-form user-profile">
          <div className="profile-card-head">
            <h2 className="text-center">My Profile</h2>
          </div>
          <p className="avatar avatar-sm avatar-initial bg-success">{`${firstName[0]} ${lastName[0]}`}</p>
          <p className="user-name">{`${firstName} ${lastName}`} </p>
          <p className="mail">{email}</p>

          {chosenAddress.name ? (
            <AddressCard address={chosenAddress} isFromProfile={true} />
          ) : (
            <button
              className="btn btn-primary choose-address-btn"
              onClick={() => navigate("/address")}
            >
              Choose an address
            </button>
          )}

          <button className="btn btn-primary log-out-btn" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProfileCard };
