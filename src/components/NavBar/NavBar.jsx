import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [noBg, addBg] = useState("navBarMenu");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_with_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>
        <div className="none">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            lenguages
          </li>
        </div>
        <div className="atb flex">
          <span>sing In</span>
          <span>Sing Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} alt="airplane logo" className="logo" />
        </div>
        <div className={`navBarMenu ${isMenuOpen ? "open" : ""}`}>
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
            <button className="btn flex btnOne">contact</button>
          </ul>
          <button className="btn flex btnTwo">Contact</button>
        </div>
        <div onClick={toggleMenu} className="ToggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
