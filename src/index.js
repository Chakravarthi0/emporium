import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  ProductsProvider,
  CategoriesProvider,
  FilterProvider,
  CartProvider,
  WishlistProvider,
} from "./context/index";
import { Toaster } from "react-hot-toast";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Toaster position="top-center" />
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <ProductsProvider>
              <CategoriesProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </CategoriesProvider>
            </ProductsProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
