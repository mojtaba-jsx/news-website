import React from "react";
import "./NewPost.css";
import { CiBookmark } from "react-icons/ci";
function NewPost({
  key,
  title,
  text,
  image,
  author,
  authorImage,
  publishDate,
}) {
  return (
    <>
      <div className="new-post">
        <img src={image} alt="image" className="new-post__image" />
        <div className="new-post__infos">
          <span className="new-post__infos-title">{title}</span>
          <p className="new-post__infos-text">{text}
            <a href="#" className="new-post__infos-text-link"> بیشتر  . . . </a>
          </p>
          <div className="new-post__infos__author">
            <div className="new-post__infos__author__right">
              <img
                src={authorImage}
                alt="author"
                className="new-post__infos__author__right-image"
              />
              <div className="new-post__infos__author__right-details">
                <span className="new-post__infos__author__right-details-name">
                  {author}
                </span>
                <span className="new-post__infos__author__right-details-date">
                  {publishDate}
                </span>
              </div>
            </div>

            <div className="new-post__infos__author__left">
              <CiBookmark className="new-post__infos__author__left-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
