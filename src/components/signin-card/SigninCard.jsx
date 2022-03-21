import React, { useState, useEffect } from "react";
import "./signin-card.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/index";

function SigninCard() {
  const [signInInput, setSignInInput] = useState({
    userEmail: "",
    password: "",
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { signIn } = useAuth();
  const { userEmail, password, rememberMe } = signInInput;

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      signIn({
        email: userEmail,
        password,
      });
    }
  }, [formErrors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "rememberMe") {
      setSignInInput((prev) => ({
        ...prev,
        rememberMe: !signInInput.rememberMe,
      }));
    } else {
      setSignInInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInput(signInInput));
    setIsSubmitted(true);
  };

  const validateInput = (inputs) => {
    const errors = {};
    const passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!inputs.userEmail) {
      errors.userEmail = "Email is required";
    } else if (!passwordRegex.test(inputs.userEmail)) {
      errors.userEmail = "This is not a valid email format";
    }
    if (!inputs.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="sign-x-form-container">
      <form className="sign-x-form">
        <h2 className="text-center">SignIn</h2>
        <div className="input-container">
          <label>Email</label>
          <input
            name="userEmail"
            className="input"
            type="email"
            value={userEmail}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.userEmail}</p>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            name="password"
            className="input"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.password}</p>
        </div>
        <div>
          <div className="sign-x-helper">
            <div>
              <label className="sign-x-label">
                <input
                  name="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleInputChange}
                />{" "}
                Remember me
              </label>
            </div>
            <Link to={"/forgot-password"} className="primary">
              Forgot password?
            </Link>
          </div>
          <button
            className="btn btn-primary sign-x-btn"
            value="submit"
            onClick={handleSignInSubmit}
          >
            Sign In
          </button>
        </div>
        <Link className="sin-x-link" to={"/signup"}>
          Create an account &gt;
        </Link>
      </form>
    </div>
  );
}

export default SigninCard;
