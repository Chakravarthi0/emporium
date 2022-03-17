import React from 'react'
import { Slider } from '../../components';
import "./product-listing.css"

function Filter() {
  return (
    <div  className="filters-container bg-white-pure">
        <div className="filters-heading">
          <h4>Filters</h4>
          <p>
            <button className="btn btn-primary">clear</button>
          </p>
        </div>
        
        {/* price-filter */}

        <Slider min={10} max={10000} changeVal={(val) => val}/>

        {/* category-filter */}

        <div className="category-filter">
          <h4 className="filter-heading">Category</h4>
          <div className="categorie-filter-options">
            <label className='filter-label'> <input type="checkbox" name="category" /> category-1 </label>

            <label className='filter-label'> <input type="checkbox" name="category" /> category-2 </label>

            <label className='filter-label'> <input type="checkbox" name="category" /> category-3 </label>

            <label className='filter-label'> <input type="checkbox" name="category" /> category-4 </label>
          </div>
        </div>

        {/* rating-filter */}

        <div className="rating-filter">
          <h4 className="filter-heading">Rating</h4>
          <div className="rating-filter-options">
            <label className='filter-label'>
              <input type="radio" name="rating" /> 4 stars & above
            </label>
            <label className='filter-label'>
              <input type="radio" name="rating" /> 3 stars & above
            </label>
            <label className='filter-label'>
              <input type="radio" name="rating" /> 2 stars & above
            </label>
            <label className='filter-label'>
              <input type="radio" name="rating" /> 1 stars & above
            </label>
          </div>
        </div>

        {/* sort */}
        <div className="sort-filter">
          <h4 className="filter-heading">sort by</h4>
          <div className="sort-filter-options">
            <label className='filter-label'>
              <input type="radio" name="sort" /> Price - Low to High
            </label>
            <label className='filter-label'>
              <input type="radio" name="sort" /> Price - High to Low
            </label>
          </div>
        </div>
      </div>
  )
}

export default Filter;