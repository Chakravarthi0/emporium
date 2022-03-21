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
} from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <CategoriesProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CategoriesProvider>
        </ProductsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
