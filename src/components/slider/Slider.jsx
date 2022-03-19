import React, {useState, useEffect} from 'react';
import {actionTypes} from "../../reducers/index";
import {useFilter} from "../../context/index"
import "./slider.css"

const Slider = ({ min, max }) => {
  const {filterState, filterDispatch} = useFilter();

    let sliderValue = filterState.maxPrice;
    let progressBar = filterState.maxPrice;

    useEffect(() => {
      sliderValue = filterState.maxPrice;
     progressBar = filterState.maxPrice;
    },[filterState.minPrice])

    return (
      <div className="price-filter">
      <div className="price-filter-head">
            <h4>Price</h4>
          <p className="slider-svalue">{sliderValue}</p>
          </div>
      <div className="slider-container">
        <div className="slider">
          <input
            className="slider-input"
            type="range"
            value={sliderValue}
            min={min}
            max={max}
            step={5000}
            onChange={(e) => {
              filterDispatch({type: actionTypes.CHANGE_PRICE_RANGE ,payload:Number(e.target.value)});
            }}
          />
          <progress
            className="progress-bar"
            value={progressBar}
            min={min}
            max={max}
          ></progress>
        </div>
      </div>
      <div className="price-range">
            <p>{min}</p>
            <p>{max}</p>
          </div>
      </div>
    );
  };

export default Slider;