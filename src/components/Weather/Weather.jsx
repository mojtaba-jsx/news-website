import React, { useEffect } from "react";
import WeatherChart from "../WeatherChart/WeatherChart";
function Weather() {
  const getWetherInfo = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=2b4e02bb9f47aae73a8596623708f2ac"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="weather">
        <div className="weather__right">
          <WeatherChart />
        </div>

        <div className="weather__left"></div>
      </div>
    </>
  );
}

export default Weather;
