import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/index";
import "../signin-card/signin-card.css";

function SignupCard() {
  const [signUpInput, setSignUpInput] = useState({
    userEmail: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { signUp } = useAuth();
  const { firstName, lastName, userEmail, password, confirmPassword } =
    signUpInput;

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      signUp({
        email: userEmail,
        password,
        firstName,
        lastName,
      });
    }
  }, [formErrors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "termsAndConditions") {
      setSignUpInput((prev) => ({
        ...prev,
        termsAndConditions: !signUpInput.termsAndConditions,
      }));
    } else {
      setSignUpInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInput(signUpInput));
    setIsSubmitted(true);
  };

  const validateInput = (inputs) => {
    const errors = {};
    const passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!inputs.firstName) {
      errors.firstName = "Firstname is required";
    }
    if (!inputs.lastName) {
      errors.lastName = "Lastname is required";
    }
    if (!inputs.userEmail) {
      errors.userEmail = "Email is required";
    } else if (!passwordRegex.test(inputs.userEmail)) {
      errors.userEmail = "This is not a valid email format";
    }
    if (!inputs.password) {
      errors.password = "Password is required";
    } else if (inputs.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (inputs.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (inputs.confirmPassword !== inputs.password) {
      errors.confirmPassword = "Passwords don't match";
    }
    if (!inputs.termsAndConditions) {
      errors.termsAndConditions = "Must agree to terms and conditions";
    }
    return errors;
  };

  return (
    <div className="sign-x-form-container">
      <form className="sign-x-form">
        <h2 className="text-center">SignUp</h2>
        <div className="input-container">
          <label>Email</label>
          <input
            className="input"
            name="userEmail"
            type="email"
            value={userEmail}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.userEmail}</p>
        </div>
        <div className="input-container">
          <label>First Name</label>
          <input
            className="input"
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.firstName}</p>
        </div>
        <div className="input-container">
          <label>Last Name</label>
          <input
            className="input"
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.lastName}</p>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            className="input"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.password}</p>
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            className="input"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.confirmPassword}</p>
        </div>
        <div>
          <div>
            <label className="sign-x-label t-and-c-container">
              <input
                type="checkbox"
                name="termsAndConditions"
                checked={signUpInput.termsAndConditions}
                onChange={handleInputChange}
              />
              I agree to all terms &amp; conditions
            </label>
            <p className="validation-msg danger">
              {formErrors.termsAndConditions}
            </p>
          </div>
          <button
            className="btn btn-primary sign-x-btn"
            value="submit"
            onClick={handleSignUpSubmit}
          >
            Sign UP
          </button>
        </div>
        <Link className="sin-x-link" to={"/signin"}>
          Already have an account &gt;
        </Link>
      </form>
    </div>
  );
}

export default SignupCard;
