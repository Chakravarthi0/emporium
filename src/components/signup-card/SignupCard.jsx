import React from "react";
import {Link} from "react-router-dom"
import "../signin-card/signin-card.css";

function SignupCard() {
  return (
    <div className="sign-x-form-container">
    <div className="sign-x-form">
      <h2 className="text-center">SignUp</h2>
      <div className="input-container">
        <label>Email</label>
        <input className="input" type="email" required="" />
      </div>
      <div className="input-container">
        <label>Name</label>
        <input className="input" type="text" required="" />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input className="input" type="password" required="" />
      </div>
      <div className="input-container">
        <label>Confirm Password</label>
        <input className="input" type="password" required="" />
      </div>
      <div>
        <div className="sign-x-helper">
          <div>
            <input type="checkbox" /> I agree to all terms &amp; conditions
          </div>
        </div>
        <input
          className="btn btn-primary sign-x-btn"
          type="submit"
          value="Sign Up"
        />
      </div>
      <Link className="sin-x-link" to={"/signin"}  >
        Already have an account &gt;
      </Link>
    </div>
    </div>
  );
}

export default SignupCard;
