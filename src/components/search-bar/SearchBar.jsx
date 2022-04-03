import React from "react";
import { useFilter } from "../../context/index";
import { actionTypes } from "../../reducers/index";
import "./search-bar.css";

function SearchBar({ fromProductsPage }) {
  console.log(useFilter());
  const {
    filterState: { searchKey },
    filterDispatch,
  } = useFilter();

  return (
    <div
      className={
        `nav-search-container nav-search icon ` +
        (fromProductsPage ? "explore-nav" : "")
      }
    >
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        className="nav-search-input"
        placeholder="Search"
        value={searchKey}
        onChange={(e) =>
          filterDispatch({
            type: actionTypes.SET_SEARCH,
            payload: e.target.value,
          })
        }
      />
    </div>
  );
}

export { SearchBar };
