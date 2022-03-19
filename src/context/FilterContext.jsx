import React, {createContext,useContext, useReducer} from 'react';
import {filterReducer} from "../reducers"

const filterContext = createContext({})

const useFilter = () => useContext(filterContext)

function FilterProvider({children}) {

    const [filterState, filterDispatch] = useReducer(filterReducer, {
      sortBy: "",
      categories:[],
      rating: 1,
      includeOutOfStock: false,
      maxPrice:50000,
    })


  return (
    <filterContext.Provider value={{filterState, filterDispatch}}>
        {children}
    </filterContext.Provider>
  )
}

export  {FilterProvider, useFilter}