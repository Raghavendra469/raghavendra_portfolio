import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css';
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import theme_pattern from "../../assets/theme_pattern.svg";



const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <div className="mylogo">
        <h1>RK</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      {/* <img src={logo} alt="" /> */}
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#href">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Contact Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar
