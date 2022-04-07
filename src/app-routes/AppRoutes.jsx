import React, { useEffect } from "react";
import { useAuth } from "../context/index";
import Mockman from "mockman-js";
import ProtectedRoutes from "./ProtectedRoutes";
import {
  Home,
  Cart,
  ProductListing,
  WishList,
  SignUP,
  SignOut,
  SignIn,
  SingleProduct,
  Checkout,
  Orders,
  OrderSummary,
  Profile,
  Address
} from "../pages/index";
import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
  const {
    authState: { token },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
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
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/address" element={<Address />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
