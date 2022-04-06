import React from "react";
import { useAuth } from "../../context/index";
import { Link } from "react-router-dom";
import "./profile-card.css";

function ProfileCard() {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");

  const {
    signOut,
    authState: { token },
  } = useAuth();

  return (
    <div>
      <div className="sign-x-form-container">
        <div className="sign-x-form user-profile">
          <div className="profile-card-head">
            <h2 className="text-center">My Profile</h2>
          </div>
          <p className="avatar avatar-md avatar-initial bg-success">{`${firstName[0]} ${lastName[0]}`}</p>
          <p className="user-name">{`${firstName} ${lastName}`} </p>
          <p className="mail">{email}</p>
          <p className="mob-no">+91 9999999999</p>
          <div className="user-address text-center">
            <p className="street">221B Baker Street</p>
            <p className="city">Marylebone, Westminster</p>
            <p className="country">London</p>
            <Link to={"/address"}>
              <i className="material-icons address-edit btn btn-dark btn-float">
                edit
              </i>
            </Link>
          </div>
          <button className="btn btn-primary log-out-btn" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProfileCard };
