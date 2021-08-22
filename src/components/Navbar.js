import React from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div class="navBar">
      <div className="logo"></div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link" smooth={true}>
          Home
        </NavLink>
        <NavLink to="/#about" className="nav-link" smooth={true}>
          About
        </NavLink>
        <NavLink to="/#projects" className="nav-link" smooth={true}>
          Projects
        </NavLink>
        <NavLink
          to="/#contact"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="contact-btn">Contact</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
