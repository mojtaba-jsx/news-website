import React from "react";
import "./CategorySliderItem.css";
function CategorySliderItem({title,image}) {
  return (
    <>
      <div className="categorySlider-item">
        <img
          src={image}
          alt="Slider"
          className="categorySlider-image"
        />
        <a href="#" className="categorySlider-title">#{title}</a>
      </div>
    </>
  );
}

export default CategorySliderItem;
