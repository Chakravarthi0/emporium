import React from "react";
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
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/products" element={<ProductListing />}></Route>
      <Route path="/wishlist" element={<WishList />}></Route>
      <Route path="/signup" element={<SignUP />}></Route>
      <Route path="/signout" element={<SignOut />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
}

export default AppRoutes;
