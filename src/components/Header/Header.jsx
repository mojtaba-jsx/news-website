import React, { useRef, useState } from "react";
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
import { IoCloseOutline } from "react-icons/io5";
import { MdChevronLeft } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { GrInfo } from "react-icons/gr";

function Header() {
  const mobileMenuRef = useRef();
  const mobileSubMenuRef1 = useRef();
  const mobileSubMenuRef2 = useRef();
  const mobileSubMenuChevronRef = useRef();

  const [mobileMenuFlag, setMobileMenuFlag] = useState(false);

  const showMobileMenu = () => {
    console.log(mobileMenuRef.current.style.display);
    mobileMenuRef.current.style.display = "block";
  };
  const hideMobileMenu = () => {
    mobileMenuRef.current.style.display = "none";
  };

  const showMobileSubMenu1 = () => {
    if (!mobileMenuFlag) {
      mobileSubMenuRef1.current.style.display = "flex";

      setMobileMenuFlag(true);
    } else {
      mobileSubMenuRef1.current.style.display = "none";
      setMobileMenuFlag(false);
    }
  };

  const showMobileSubMenu2 = () => {
    if (!mobileMenuFlag) {
      mobileSubMenuRef2.current.style.display = "flex";

      setMobileMenuFlag(true);
    } else {
      mobileSubMenuRef2.current.style.display = "none";
      setMobileMenuFlag(false);
    }
  };

  return (
    <>
      <div className="container">
        {/* //! Navbar  */}
        <nav className="navbar">
          {/* //! Mobile Menu Btn  */}
          <div className="mobile-menu-btn" onClick={showMobileMenu}>
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
                      <FcPhoneAndroid className="submneu__icon" />
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
            <input
              type="text"
              className="navbar__search-input"
              placeholder="جست و جو کنید ..."
            />
            <CiSearch className="navbar__search-icon" />
          </div>
        </nav>
      </div>

      {/* //! Mobile Menu  */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <div className="mobile-menu__logo">
          <a href="#" className="mobile-menu__logo-link">
            مگا نیوز
          </a>
          <span
            className="mobile-menu__logo__close-btn"
            onClick={hideMobileMenu}
          >
            <IoCloseOutline className="mobile-menu__logo__close-btn-icon" />
          </span>
        </div>
        <ul className="mobile-menu__list">
          <li
            className="mobile-menu__item mobile-menu__submenu-hover"
            onClick={showMobileSubMenu1}
          >
            <BiSolidCategoryAlt className="mobile-menu__item-icon" />
            <a
              href="#"
              className="mobile-menu__link"
              ref={mobileSubMenuChevronRef}
            >
              دسته بندی
              <MdChevronLeft className="mobile-menu__item-chevron" />
            </a>
          </li>
          {/* //! Mobile Menu SubMneu  */}
          <ul className="mobile-menu__submenu" ref={mobileSubMenuRef1}>
            <li className="mobile-menu__submenu__item">
              <a href="#" className="mobile-menu__submenu__link">
                سرگرمی
                <FcMms className="submneu__icon" />
                
              </a>
            </li>
            <li className="mobile-menu__submenu__item">
              <a href="#" className="mobile-menu__submenu__link">
                اقتصادی
                <FcBullish className="submneu__icon" />
                
              </a>
            </li>
            <li className="mobile-menu__submenu__item">
              <a href="#" className="mobile-menu__submenu__link">
                تکنولوژی
                <FcPhoneAndroid className="submneu__icon" />
                
              </a>
            </li>
            <li className="mobile-menu__submenu__item">
              <a href="#" className="mobile-menu__submenu__link">
                ورزشی
                <FaBasketballBall className="submneu__icon" />
                
              </a>
            </li>
            <li className="mobile-menu__submenu__item">
              <a href="#" className="mobile-menu__submenu__link">
                علمی
                <FcGraduationCap className="submneu__icon" />
                
              </a>
            </li>
            <li className="mobile-menu__submenu__item">
              <a href="#" className="mobile-menu__submenu__link">
                اجتماعی
                <FcCollaboration className="submneu__icon" />
                
              </a>
            </li>
          </ul>
          <li className="mobile-menu__item" onClick={showMobileSubMenu2}>
            <RiPagesLine className="mobile-menu__item-icon" />
            <a href="#" className="mobile-menu__link">
              صفحات
              <MdChevronLeft className="mobile-menu__item-chevron" />
            </a>
          </li>
          {/* //! Mobile Menu SubMneu  */}
          <ul className="mobile-menu__submenu2" ref={mobileSubMenuRef2}>
            <li className="mobile-menu__submenu2__item">
              <a href="#" className="mobile-menu__submenu2__link">
                صفحه 1
              </a>
            </li>
            <li className="mobile-menu__submenu2__item">
              <a href="#" className="mobile-menu__submenu2__link">
                صفحه 2
              </a>
            </li>
            <li className="mobile-menu__submenu2__item">
              <a href="#" className="mobile-menu__submenu2__link">
                صفحه 3
              </a>
            </li>
            <li className="mobile-menu__submenu2__item">
              <a href="#" className="mobile-menu__submenu2__link">
                صفحه 4
              </a>
            </li>
          </ul>
          <li className="mobile-menu__item">
            <MdContactPhone className="mobile-menu__item-icon" />
            <a href="#" className="mobile-menu__link">
              ارتباط با ما
            </a>
          </li>
          <li className="mobile-menu__item">
            <GrInfo className="mobile-menu__item-icon" />
            <a href="#" className="mobile-menu__link">
              درباره ما
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
