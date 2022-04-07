import { actionTypes } from "./actionTypes";

const { SET_CHOSEN_ADDRESS, SET_ADDRESS, SET_LOADING } = actionTypes;

const addressReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ADDRESS:
      return {
        ...state,
        addresses: payload.addresses,
      };

    case SET_CHOSEN_ADDRESS: {
      return {
        ...state,
        chosenAddress: payload.address,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: payload.loadingState,
      };
    }
    default:
      return state;
  }
};

export { addressReducer };
