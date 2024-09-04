import React from "react";
import "./LandingCard.css";
function LandingCard({ title, text, image }) {
  return (
    <div className="landing-card">
      <img src={image} alt="card" className="landing-card__image" />
      <div className="landing-card__infos">
        <h1 className="landing-card__infos-title">{title}</h1>
        <p className="landing-card__infos-text">{text}</p>
      </div>
    </div>
  );
}

export default LandingCard;
