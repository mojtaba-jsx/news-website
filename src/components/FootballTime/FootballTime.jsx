import React from "react";
import "./FootballTime.css";
function FootballTime() {
  return (
    <>
      <div className="football-time">
        <h1 className="football-time__title">راند نهایی</h1>
        <div className="football-time__infos">
          <img
            src="https://s8.uupload.ir/files/manchester0united_plpg.png"
            alt="football"
            className="football-time__infos-image"
          />
          <div className="football-time__infos-texts">
            <h2 className="football-time__infos-texts__vs">VS</h2>
            دوشنبه 8 آگوست
          </div>
          <img
            src="https://s8.uupload.ir/files/manchester-city_3c99.png"
            alt="football"
            className="football-time__infos-image"
          />
        </div>

        <div className="football-time__scores">
          <span className="football-time__scores-team1">Manchester City</span>
          <div className="football-time__scores-box">
          <span className="football-time__scores-goal1">00</span>
          <span className="football-time__scores-goal2">00</span>
          </div>
          <span className="football-time__scores-team2">Liverpool</span>
        </div>
      </div>
    </>
  );
}

export default FootballTime;
