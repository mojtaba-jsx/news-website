import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
function Header() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          {/* //! Navbar Logo */}
          <div className="navbar__logo">
            <img
              src="./src\assets\images\logo.jpeg"
              alt="Logo"
              className="navbar__logo-img"
            />
          </div>

          {/* //! Navbar Menu */}
          <ul className="navbar__menu">
            <li className="navbar__menu-item">
              <a href="#" className="navbar__menu-link">
                دسته بندی ها
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#" className="navbar__menu-link">
                صفحات
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#" className="navbar__menu-link">
                ارتباط با ما
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#" className="navbar__menu-link">
                درباره ما
              </a>
            </li>
          </ul>

          {/* //! Navbar Info */}
          <div className="navbar__info">
            <div className="navbar__info__input">
              <input type="text" className="navbar__info__input-tag" />
              <CiSearch className="navbar__info__input-icon" />
            </div>

            <div className="navbar__info__admin">
              <img
                src="./src\assets\images\user.png"
                alt=""
                className="navbar__info__admin-image"
              />
              <span className="navbar__info__admin__name">
                Mojtaba
                <IoIosArrowDown className="navbar__info__admin__name-icon" />
              </span>
            </div>

            <div className="navbar__info__saved">
            <CiBookmark className="navbar__info__saved-icon" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
