import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/index";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducers/index";
import axios from "axios";
const authContext = createContext({});

const useAuth = () => useContext(authContext);

const { SIGN_IN, SIGN_OUT } = actionTypes;

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, {
    token: localStorage.getItem("token") || "",
  });

  const signUp = async (input) => {
    try {
      const res = await axios.post("/api/auth/signup", input);

      if (res.status === 201) {
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async (input) => {
    try {
      const res = await axios.post("/api/auth/login", input);

      if (res.status === 200) {
        const { encodedToken } = res.data;
        localStorage.setItem("token", encodedToken);
        authDispatch({ type: SIGN_IN, payload: { token: encodedToken } });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    authDispatch({ type: SIGN_OUT });
    navigate("/");
  };

  return (
    <authContext.Provider value={{ authState, signUp, signIn, signOut }}>
      {children}
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider };
