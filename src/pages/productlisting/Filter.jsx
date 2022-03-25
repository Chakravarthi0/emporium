import React from "react";
import { Slider } from "../../components";
import { useCategories, useFilter } from "../../context/index";
import { actionTypes } from "../../reducers";
import "./product-listing.css";

function Filter({displayFilters, toggleDisplayFilters}) {
  const { categories } = useCategories();
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className={"filters-container bg-white-pure " + (displayFilters ? "show-filters-container" : "")}>

      <button className={"btn btn-primary-ol btn-float filter-close-btn " + (displayFilters ? "" : "hidden")}
        onClick={toggleDisplayFilters} >
        <i className="material-icons">close</i>
      </button>
      
      <div className="filter-heading main-filter-heading">
        <h4>Filters</h4>
        <p>
          <button className="btn btn-primary" onClick={() => filterDispatch({type:actionTypes.CLEAR_FILTERS})}>clear</button>
        </p>
      </div>

      {/* price-filter */}

      <Slider min={0} max={50000} />

      {/* category-filter */}

      <div className="category-filter">
        <h4 className="filter-heading">Category</h4>
        <div className="categories-filter-options">
          {
            <label className="filter-label">
              <input type="checkbox" name={"all-category"} 
              checked={filterState.categories.length === 0 || filterState.categories.length === categories.length}
              onChange={() =>filterDispatch({type:actionTypes.CLEAR_CATEGORIES})}
               />
              <span className="category-name">All</span>
          </label>
          }
          {categories.map((ele) => {
            return (
              <label key={ele._id} className="filter-label">
                <input type="checkbox" name={ele.categoryName} 
                checked={filterState.categories.includes(ele.categoryName)}
                onChange={() =>filterDispatch({type:actionTypes.CHANGE_CATEGORIES, payload: ele.categoryName})}
                 />
                <span className="category-name">{ele.title}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* rating-filter */}

      <div className="rating-filter">
        <h4 className="filter-heading">Rating</h4>
        <div className="rating-filter-options">
          <label className="filter-label">
            <input
              type="radio"
              name="rating"
              checked={filterState.rating === 4}
              onChange={() =>
                filterDispatch({ type: actionTypes.CHANGE_RATING, payload: 4 })
              }
            />
            <p className="category-name">4 stars & above</p>
          </label>
          <label className="filter-label">
            <input
              type="radio"
              name="rating"
              checked={filterState.rating === 3}
              onChange={() =>
                filterDispatch({ type: actionTypes.CHANGE_RATING, payload: 3 })
              }
            />
            <p className="category-name">3 stars & above</p>
          </label>
          <label className="filter-label">
            <input
              type="radio"
              name="rating"
              checked={filterState.rating === 2}
              onChange={() =>
                filterDispatch({ type: actionTypes.CHANGE_RATING, payload: 2 })
              }
            />
            <p className="category-name">2 stars & above</p>
          </label>
          <label className="filter-label">
            <input
              type="radio"
              name="rating"
              checked={filterState.rating === 1}
              onChange={() =>
                filterDispatch({ type: actionTypes.CHANGE_RATING, payload: 1 })
              }
            />
            <p className="category-name">1 stars & above</p>
          </label>
        </div>
      </div>

      {/* sort */}
      <div className="sort-filter">
        <h4 className="filter-heading">Sort by</h4>
        <div className="sort-filter-options">
          <label className="filter-label">
            <input
              type="radio"
              checked={filterState.sortBy === "ascending"}
              onChange={() =>
                filterDispatch({ type: actionTypes.SORT_ASCENDING })
              }
              name="sort"
            />
            <p className="category-name">Price - Low to High</p>
          </label>
          <label className="filter-label">
            <input
              type="radio"
              checked={filterState.sortBy === "descending"}
              onChange={() =>
                filterDispatch({ type: actionTypes.SORT_DESCENDING })
              }
              name="sort"
            />
            <p className="category-name">Price - High to Low</p>
          </label>
        </div>
      </div>

      {/* availability */}

      <div className="availability-filter">
        <h4 className="filter-heading">Availability</h4>
        <label className="filter-label">
                <input type="checkbox" name={"availability"} 
                checked={filterState.includeOutOfStock}
                onChange={() =>filterDispatch({type:actionTypes.TOGGLE_INSTOCK})}
                 />
                <span className="category-name">Include out of stock</span>
              </label>
        </div>

    </div>
  );
}

export default Filter;
