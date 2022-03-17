import React from "react";
import "./signin-card.css";
import {Link} from "react-router-dom"

function SigninCard() {
  return (
    <div className="sign-x-form-container">
    <div className="sign-x-form">
      <h2 className="text-center">SignIn</h2>
      <div className="input-container">
        <label>Email</label>
        <input className="input" type="email" required="" />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input className="input" type="password" required="" />
      </div>
      <div>
        <div className="sign-x-helper">
          <div>
            <input type="checkbox" /> Remember me
          </div>
          <Link to={"/forgot-password"} className="primary">
            Forgot password?
          </Link>
        </div>
        <input
          className="btn btn-primary sign-x-btn"
          type="submit"
          value="login"
        />
      </div>
      <Link className="sin-x-link" to={"/signup"}>
        Create an account &gt;
      </Link>
    </div>
    </div>
  );
}

export default SigninCard;
