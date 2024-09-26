import React from "react";
import "./LatestVideos.css";
import LatestVideo from "../LatestVideo/LatestVideo";
function LatestVideos() {
  return (
    <>
      <div className="container">
        <h1 className="latest-videos__title">آخرین ویدیو ها</h1>
        <div className="latest-videos">
          <LatestVideo />
          <div className="latest-videos-box">
            <LatestVideo width={"500px"} height={"214px"} showInfo={"none"} />
            <LatestVideo width={"500px"} height={"214px"} showInfo={"none"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestVideos;
