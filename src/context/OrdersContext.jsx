import React, { createContext, useContext, useReducer } from "react";
import { actionTypes, ordersReducer } from "../reducers";

const ordersContext = createContext([]);

const useOrders = () => useContext(ordersContext);

const { ADD_TO_ORDERS } = actionTypes;

function OrdersProvider({ children }) {
  const [ordersState, ordersDispatch] = useReducer(ordersReducer, {
    orders: [],
    latestOrder: { products: [], couponDiscount: 0, total: 0 },
  });

  const addToOrders = (newOrders, result) => {
    ordersDispatch({
      type: ADD_TO_ORDERS,
      payload: {
        newOrders,
        couponDiscount: result.couponDiscount,
        total: result.total,
      },
    });
  };

  return (
    <ordersContext.Provider value={{ ordersState, addToOrders }}>
      {children}
    </ordersContext.Provider>
  );
}

export { OrdersProvider, useOrders };
