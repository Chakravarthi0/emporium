import { actionTypes } from "./actionTypes";

const filterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORIES:
      if (state.categories.includes(action.payload)) {
        const res = state.categories.slice();
        const index = state.categories.indexOf(action.payload);
        res.splice(index, 1);
        return { ...state, categories: res };
      } else {
        return { ...state, categories: [...state.categories, action.payload] };
      }
    case actionTypes.CLEAR_CATEGORIES:
      return { ...state, categories: [] };
    case actionTypes.CHANGE_PRICE_RANGE:
      return { ...state, minPrice: action.payload };
    case actionTypes.CHANGE_RATING:
      return { ...state, rating: action.payload };
    case actionTypes.SORT_ASCENDING:
      return { ...state, sortBy: "ascending" };
    case actionTypes.SORT_DESCENDING:
      return { ...state, sortBy: "descending" };
    case actionTypes.CLEAR_FILTERS:
      return {
        sortBy: "",
        categories: [],
        rating: 1,
        includeOutOfStock: false,
        minPrice: 0,
      };
    case actionTypes.TOGGLE_INSTOCK:
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    default:
      return state;
  }
};

export { filterReducer };
