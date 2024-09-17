import React from "react";
import "./PostCard.css";
import { CiBookmark } from "react-icons/ci";
function PostCard({ title, text, image, authorImage, publishDate, author }) {
  return (
    <div className="post-card">
      <img src={image} alt="post" className="post-card__image" />
      <div className="post-card__bottom">
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__text">
          {text.substring(0, 40)}
          {"  "}
          <a href="#" className="post-card__text-link">
            بیشتر ...
          </a>
        </p>
        <div className="post-card__author">
          <div className="post-card__author__right">
            <img
              src={authorImage}
              alt="author"
              className="post-card__author__right-image"
            />
            <div className="post-card__author__right__infos">
              <span className="post-card__author__right__infos-name">
                {author}
              </span>
              <span className="post-card__author__right__infos-date">
                {publishDate}
              </span>
            </div>
          </div>

          <div className="post-card__author__left">
            <CiBookmark className="post-card__author__left-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
