import React,{useEffect} from "react";
import {useAuth} from "../context/index"
import Mockman from "mockman-js";
import ProtectedRoutes from "./ProtectedRoutes";
import {
  HomePage,
  Cart,
  ProductListing,
  WishList,
  SignUP,
  SignOut,
  SignIn,
  SingleProduct
} from "../pages/index";
import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {

  const {
    authState: { token },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {!token ? (
        <>
          <Route path="/signup" element={<SignUP />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </>
      ) : (
        <>
          <Route path="/signup" element={<Navigate replace to="/" />}></Route>
          <Route path="/signin" element={<Navigate replace to="/" />}></Route>
        </>
      )}
      <Route path="/products" element={<ProductListing />}></Route>
      <Route path="/product/:productId" element={<SingleProduct />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/signout" element={<SignOut />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
      </Route>

      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export default AppRoutes;
