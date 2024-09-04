import React, { useState } from "react";
import "./Landing.css";
import LandingCard from "../LandingCard/LandingCard";
import LandingSlider from "../LandingSlider/LandingSlider";
function Landing() {
  const [cardsInfo, setCardsInfo] = useState([
    {
      id: 1,
      title: "چگونه رانندگی کنیم ؟ ",
      text: "باید با رعایت اصول ایمنی و با توجه به قوانین رانندگی کنیم",
      image: "https://s8.uupload.ir/files/car_trui.png",
    },
    {
      id: 2,
      title: "چگونه یک اهنگ شاد برای رقص درست کنیم ؟",
      text: "با استفاده از ساز های موسیقی و تنظیم مناسب اهنگ می توانیم اهنگ های دلخواه را بسازیم ",
      image: "https://s8.uupload.ir/files/music_tn3l.png",
    },
  ]);
  return (
    <>
      <div className="container">
        <div className="landing">
          <div className="landing-cards">
            {cardsInfo.map((cardInfo) => (
              <LandingCard
                key={cardInfo.id}
                title={cardInfo.title}
                text={cardInfo.text}
                image={cardInfo.image}
              />
            ))}
          </div>
          <LandingSlider />
        </div>
      </div>
    </>
  );
}

export default Landing;
