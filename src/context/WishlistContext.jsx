import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./index";
import toast from "react-hot-toast";
import axios from "axios";

const wishlistContext = createContext([]);

const useWishlist = () => useContext(wishlistContext);

function WishlistProvider({ children }) {
  const {
    authState: { token },
  } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          let response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            setWishlistItems(response.data.wishlist);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else{
        setWishlistItems([])
      }
    })();
  }, [token]);

  const addToWishlist = async (product, setIsLoading) => {
    try {
      setIsLoading((prev) => ({ ...prev, wishlist: true }));
      const response = await axios.post(
        "/api/user/wishlist",
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
        setWishlistItems(response.data.wishlist);
        toast.success("Item addded to wishlist");
        setIsLoading((prev) => ({ ...prev, wishlist: false }));
      }
    } catch (err) {
      setIsLoading((prev) => ({ ...prev, wishlist: false }));
      console.log(err);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        setWishlistItems(response.data.wishlist);
        toast.success("Item removed from wishlist");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <wishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </wishlistContext.Provider>
  );
}

export { useWishlist, WishlistProvider };
