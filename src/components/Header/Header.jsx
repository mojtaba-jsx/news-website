import React from "react";
import "./Header.css";
import "../../custom.css";
import { IoIosArrowDown } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { FcMms } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaBasketballBall } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          {/* //! Mobile Menu Btn  */}

          <div className="mobile-menu-btn">
            <IoIosMenu className="mobile-menu-btn-icon" />
          </div>
          {/* //! Navbar Logo */}
          <div className="navbar__logo">
            {/* <img
              src="./src\assets\images\logo.jpeg"
              alt="Logo"
              className="navbar__logo-img"
            /> */}
            مگا نیوز
          </div>

          {/* //! Navbar Menu */}
          <ul className="navbar__menu">
            <li className="navbar__menu-item submenu-hover">
              <a href="#" className="navbar__menu-link ">
                دسته بندی ها
                <IoIosArrowDown className="navbar__menu-link-icon" />
              </a>
              <div className="submenu">
                <ul className="submenu__list">
                  <li className="submenu__item">
                    <a href="#" className="submenu__link">
                      سرگرمی
                      <FcMms className="submneu__icon" />
                    </a>
                  </li>
                  <li className="submenu__item">
                    <a href="#" className="submenu__link">
                      اقتصادی
                      <FcBullish className="submneu__icon" />
                    </a>
                  </li>
                  <li className="submenu__item">
                    <a href="#" className="submenu__link">
                      تکنولوژی
                      <FcPhoneAndroid />
                    </a>
                  </li>
                  <li className="submenu__item">
                    <a href="#" className="submenu__link">
                      ورزشی
                      <FaBasketballBall className="submneu__icon" />
                    </a>
                  </li>
                  <li className="submenu__item">
                    <a href="#" className="submenu__link">
                      علمی
                      <FcGraduationCap className="submneu__icon" />
                    </a>
                  </li>
                  <li className="submenu__item">
                    <a href="#" className="submenu__link">
                      اجتماعی
                      <FcCollaboration className="submneu__icon" />
                    </a>
                  </li>
                </ul>
              </div>
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

          <div className="navbar__search">
            <input type="text" className="navbar__search-input" placeholder="جست و جو کنید ..." />
            <CiSearch className="navbar__search-icon" />
          </div>

          {/* //! Navbar Info */}
          <div className="navbar__info">
            <div className="navbar__info__admin">
              <img
                src="./src\assets\images\user.png"
                alt=""
                className="navbar__info__admin-image"
              />
              <span className="navbar__info__admin__name">
                مجتبی
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
