import React from "react";
import "./LandingSliderItem.css";
function LandingSliderItem({ title, text, image }) {
  return (
    <div className="landing-slide">
      <img src={image} alt="image-slide" className="landing-slide__image" />
      <div className="landing-slide__info">
        <h1 className="landing-slide__info-title">{title}</h1>
        <p className="landing-slide__info-text">{text}</p>
      </div>
    </div>
  );
}

export default LandingSliderItem;
