import React from "react";
import "./LatestVideo.css";
import { FaPlay } from "react-icons/fa6";
function LatestVideo({ width, height, showInfo }) {
  return (
    <>
      <div className="latest-video" style={{ width: width, height: height }}>
        <img
          src="https://s8.uupload.ir/files/post5_0ogq.png"
          alt="videoImage"
          className="latest-video__image"
        />
        <div className="latest-video__info" style={{ display: showInfo }}>
          <h1 className="latest-video__info-title">
            چطور اخبار را پیگیری کنیم ؟
          </h1>
          <p className="latest-video__info-text">
            اخبار را باید با هدف و بدون در گیری کامل ذهن پیگیری کرد و تخبار مهم
            را بیشتر برسی کرد .
          </p>
        </div>
        <a href="#" className="latest-video__btn">
          <FaPlay className="latest-video__btn-icon" />
        </a>
      </div>
    </>
  );
}

export default LatestVideo;
