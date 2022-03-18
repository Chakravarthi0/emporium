import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const categoriesContext = createContext({});

const useCategories = () => useContext(categoriesContext);

function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setIsLoading(true);
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          setCategories(response.data.categories);
          setIsLoading(false);
        }
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <categoriesContext.Provider value={{ categories, isLoading, error }}>
      {children}
    </categoriesContext.Provider>
  );
}

export { useCategories, CategoriesProvider };
