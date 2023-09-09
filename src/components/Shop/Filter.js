import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import classes from "./Filter.module.css";

const CustomSlider = styled(Slider)`
  width: 95%;
  height: 2px;
  color: #474848;
  margin: auto;

  & .MuiSlider-thumb {
    width: 10px;
    height: 10px;
    transition: 0.5s;
  }

  & .MuiSlider-thumb:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 12px;
    height: 12px;
  }
`;

function Filters({
  updateFilter,
  minPrice,
  maxPrice,
  showFilter,
  onHideFilter,
  disabled,
}) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState();
  const [range, setRange] = useState([minPrice, maxPrice]);
  const [optionsVisibility, setOptionsVisibility] = useState({
    price: true,
    rating: false,
    category: false,
  });

  const handleChanges = (_, newValue) => {
    setRange(newValue);
    updateFilter("price", newValue);
  };

  const handleCategoryToggle = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    updateFilter("category", updatedCategories);
  };

  const isCategorySelected = (category) =>
    selectedCategories.includes(category);

  const toggleOptionVisibility = (option) => {
    setOptionsVisibility((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };
  const stars = [1, 2, 3, 4, 5];
  const onRatingChange = (rating) => {
    setSelectedRating(rating);
    updateFilter("rating", rating);
  };
  return (
    <div className={`${classes.filter} ${showFilter ? classes.show : ""}`}>
      <div className={classes.filterContain}>
        <div onClick={onHideFilter} className={classes.closeFilter}>
          &#10006;
        </div>
        <h2>Filter by</h2>

        <div className={classes.filterBorder}></div>
        <button onClick={() => toggleOptionVisibility("price")}>
          <span>Price</span>
          <span>{optionsVisibility.price ? "-" : "+"}</span>
        </button>
        {optionsVisibility.price && (
          <div className={`${classes.filterOptions} ${classes.show}`}>
            <CustomSlider
              min={minPrice}
              max={maxPrice}
              value={range}
              onChange={handleChanges}
            />
            <div className={classes.filterPrices}>
              <span>${range[0]}</span>
              <span>${range[1]}</span>
            </div>
          </div>
        )}
        <div className={classes.filterBorder}></div>

        <button onClick={() => toggleOptionVisibility("category")}>
          <span>Category</span>
          <span>{optionsVisibility.category ? "-" : "+"}</span>
        </button>
        {optionsVisibility.category && (
          <div className={`${classes.filterOptions} ${classes.show}`}>
            <div className={classes.categoryOptions}>
              {["cloth", "footwear", "accessories", "other"].map((category) => (
                <div key={category} className={classes.categoryOption}>
                  <input
                    type="checkbox"
                    id={category}
                    checked={isCategorySelected(category)}
                    onChange={() => handleCategoryToggle(category)}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={classes.filterBorder}></div>
        <button onClick={() => toggleOptionVisibility("rating")}>
          <span>Rating</span>
          <span>{optionsVisibility.rating ? "-" : "+"}</span>
        </button>
        {optionsVisibility.rating && (
          <div className={`${classes.filterOptions} ${classes.show}`}>
            <div className={classes.starRating}>
              {stars.map((star) => (
                <span
                  key={star}
                  className={
                    star <= selectedRating ? classes.filled : classes.star
                  }
                  onClick={() => onRatingChange(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={classes.clearFilterBtn}>
        <button
          disabled={disabled}
          onClick={() => {
            setSelectedCategories([]);
            setRange([minPrice, maxPrice]);
            updateFilter("all");
            onHideFilter();
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
