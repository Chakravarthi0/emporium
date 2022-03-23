import React, { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./index";
import axios from "axios";

const cartContext = createContext();

const useCart = () => useContext(cartContext);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get("/api/user/cart", {
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            setCartItems(response.data.cart);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else{
        setCartItems([])
      }
    })();
  }, [token]);

  const addToCart = async (product, setIsLoading) => {
    try {
      setIsLoading((prev) => ({ ...prev, cart: true }));
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        setCartItems(response.data.cart);
        setIsLoading((prev) => ({ ...prev, cart: false }));
      }
    } catch (err) {
      setIsLoading((prev) => ({ ...prev, cart: false }));
      console.log(err);
    }
  };

  const changeQuantity = async (productId, type, setIsLoading) => {
    try {
      setIsLoading((prev) => ({ ...prev, cart: true }));
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        setCartItems(response.data.cart);
        setIsLoading((prev) => ({ ...prev, cart: false }));
      }
    } catch (err) {
      setIsLoading((prev) => ({ ...prev, cart: false }));
      console.log(err);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        setCartItems(response.data.cart);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        changeQuantity,
        removeFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, useCart };
