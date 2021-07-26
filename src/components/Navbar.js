import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div class="navBar">
      <div className="logo"></div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="{#about}" className="nav-link">
          About
        </NavLink>
        <NavLink to="/" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/" className="nav-link">
          <button>Contact</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
