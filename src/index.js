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
} from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <CategoriesProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </CategoriesProvider>
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
