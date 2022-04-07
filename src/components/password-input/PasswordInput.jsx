import React, { useState } from "react";
import "./password-input.css";

function PasswordInput({name, handleInputChange, inputValue}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        onClick={() =>
          setShowPassword(p => !p)
        }
        className={
          "password " +
          (showPassword ? "hide-password" : "show-password")
        }
      ></div>
      <input
        className="input"
        name={name}
        type={ showPassword ? "text" : "password"}
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
}

export {PasswordInput};
