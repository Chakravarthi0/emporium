import { actionTypes } from "./actionTypes";

const filterReducer = (state, action) => {

  const {CHANGE_CATEGORIES, CLEAR_CATEGORIES, CHANGE_PRICE_RANGE,CHANGE_RATING, SORT_ASCENDING, SORT_DESCENDING, CLEAR_FILTERS, TOGGLE_INSTOCK } = actionTypes;
  switch (action.type) {
    case CHANGE_CATEGORIES:

      if (state.categories.includes(action.payload)) {
        const res = state.categories.slice();
        const index = state.categories.indexOf(action.payload);
        res.splice(index, 1);
        return { 
          ...state, categories: res 
        };
      } 
      else {
        return { 
          ...state, categories: [...state.categories, action.payload] 
        };
      }
    case CLEAR_CATEGORIES:
      return { 
        ...state, categories: [] 
      };
    case CHANGE_PRICE_RANGE:
      return {
         ...state, maxPrice: action.payload 
        };
    case CHANGE_RATING:
      return { 
        ...state, rating: action.payload
       };
    case SORT_ASCENDING:
      return { 
        ...state, sortBy: "ascending" 
      };
    case SORT_DESCENDING:
      return { 
        ...state, sortBy: "descending"
       };
    case CLEAR_FILTERS:
      return {
        sortBy: "",
        categories: [],
        rating: 1,
        includeOutOfStock: false,
        maxPrice: 50000,
      };
    case TOGGLE_INSTOCK:
      return {
         ...state, includeOutOfStock: !state.includeOutOfStock 
      };
    default:
      return state;
  }
};

export { filterReducer };
