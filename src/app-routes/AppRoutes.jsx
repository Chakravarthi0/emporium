import React from "react";
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
} from "../pages/index";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductListing />}></Route>
      <Route path="/signup" element={<SignUP />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
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
