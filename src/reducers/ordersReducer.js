import { actionTypes } from "./actionTypes";

const { ADD_TO_ORDERS } = actionTypes;

const ordersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_ORDERS:
      return {
        orders: [...state.orders, ...payload.newOrders],
        latestOrder: {
          products: payload.newOrders,
          couponDiscount: payload.couponDiscount,
          total: payload.total,
        },
      };
    default:
      return state;
  }
};

export { ordersReducer };
