import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const productsContext = createContext({});

const useProducts = () => useContext(productsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsLoading(true);
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          setProducts(response.data.products);
          setIsLoading(false);
        }
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <productsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </productsContext.Provider>
  );
}

export { useProducts, ProductsProvider };
