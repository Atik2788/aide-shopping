import React from "react";
import "./Header.css";
import { AiOutlineDown, AiFillDatabase } from "react-icons/ai";
import navLogo from '../../assets/nav-logo.png'


const Header = () => {
  return (
    <div className="header">

      <div className="header-Icon">
          <img src={navLogo} alt="" />
          <div className="nav-icon-hover">
            <div >
              <p className="nav-icon-hover-p">Open Sponsorship</p>
              <p className="nav-icon-hover-p">Call Center</p>
              <p className="nav-icon-hover-p">Help</p>
              <p className="nav-icon-hover-p">Tutorial</p>
              <p className="nav-icon-hover-p">Be Partner</p>
            </div>
          </div>
        </div>

      <div className="header-text header-text-mobile-hide">
        <p className="margin-bottom-zero">Opens Sponsorship</p>
        <p className="margin-bottom-zero">Call Center</p>
        <p className="margin-bottom-zero">Help</p>
        <p className="margin-bottom-zero">Tutorial</p>
      </div>

      <div className="header-text ">
        <p className="margin-bottom-zero">Be Partner</p>

        <div className="header-text">
          <p className="margin-bottom-zero">English</p>

          <div className="english-bengali-container">
            <span className="english-arrow">
              <AiOutlineDown />
            </span>

            <div className="english-bengali-content">
              <li>English</li>
              <li>Bengali</li>
            </div>
          </div>
        </div>

        <div></div>

      </div>
    </div>
  );
};

export default Header;
