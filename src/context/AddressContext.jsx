import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./index";
import { addressReducer } from "../reducers/index";
import { actionTypes } from "../reducers/index";
import toast from "react-hot-toast";
import axios from "axios";

const addresses = createContext([]);

const useAddress = () => useContext(addresses);

function AddressProvider({ children }) {
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    addresses: [],
    chosenAddress: {},
    loading: false,
  });

  const {
    authState: { token },
  } = useAuth();

  const { SET_CHOSEN_ADDRESS, SET_ADDRESS, SET_LOADING } = actionTypes;

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get("/api/user/address", {
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            addressDispatch({
              type: SET_ADDRESS,
              payload: { addresses: response.data.address },
            });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        addressDispatch({
          type: SET_ADDRESS,
          payload: { addeesses: [] },
        });
      }
    })();
  }, [token]);

  const addAddress = async (address) => {
    try {
      addressDispatch({
        type: SET_LOADING,
        payload: { loadingState: true },
      });
      const response = await axios.post(
        "/api/user/address",
        { address },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 201) {
        addressDispatch({
          type: SET_ADDRESS,
          payload: { addresses: response.data.address },
        });
        toast.success("Address addedd successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      addressDispatch({
        type: SET_LOADING,
        payload: { loadingState: false },
      });
    }
  };

  const updateAddress = async (addressId, address) => {
    try {
      addressDispatch({
        type: SET_LOADING,
        payload: { loadingState: true },
      });
      const response = await axios.post(
        `/api/user/address/${addressId}`,
        { address },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        addressDispatch({
          type: SET_ADDRESS,
          payload: { addresses: response.data.address },
        });
        toast.success("Address updated successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      addressDispatch({
        type: SET_LOADING,
        payload: { loadingState: false },
      });
    }
  };

  const deleteAddress = async (addressId) => {
    try {
      addressDispatch({
        type: SET_LOADING,
        payload: { loadingState: true },
      });
      const response = await axios.delete(`/api/user/address/${addressId}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        addressDispatch({
          type: SET_ADDRESS,
          payload: { addresses: response.data.address },
        });
        toast.success("Address deleted successfully");
      }
    } catch (err) {
      console.log(err);
    } finally {
      addressDispatch({
        type: SET_LOADING,
        payload: { loadingState: false },
      });
      toast.error("Something went wrong");
    }
  };

  const setChosenAddress = (address) => {
    addressDispatch({
      type: SET_CHOSEN_ADDRESS,
      payload: { address },
    });

    toast.success("Address selected successfully");
  };
  return (
    <addresses.Provider
      value={{
        addressState,
        addAddress,
        updateAddress,
        deleteAddress,
        setChosenAddress,
      }}
    >
      {children}
    </addresses.Provider>
  );
}

export { AddressProvider, useAddress };
