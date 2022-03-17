import React, {useState} from 'react'
import "./slider.css"

const Slider = ({ min, max, changeVal }) => {
    const [sliderValue, setSliderValue] = useState(min);
    const [progressBar, setProgressBar] = useState(min);
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
            onChange={(e) => {
              setSliderValue(Number(e.target.value));
              setProgressBar(Number(e.target.value));
              changeVal(Number(e.target.value));
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