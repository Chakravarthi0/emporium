import { actionTypes } from "./actionTypes";

const { SIGN_IN, SIGN_OUT } = actionTypes;

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, token: action.payload.token };
    case SIGN_OUT:
      return { ...state, token: "" };
    default:
      return state;
  }
};

export { authReducer };
