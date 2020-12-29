import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div id="logo">
          <i className="fa fa-code" aria-hidden="true"></i>SRK
        </div>

        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li>Home</li>
          </Link>
          <Link to="/Work" style={{ textDecoration: "none", color: "black" }}>
            <li>Work</li>
          </Link>
          <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
            <li>About Me</li>
          </Link>
          <Link to="/Blog" style={{ textDecoration: "none", color: "black" }}>
            <li>Blog</li>
          </Link>
          <Link
            to="/Contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>Contact</li>
          </Link>
        </ul>

        <a href="/" id="hire-me">
          Hire Me
        </a>
      </div>
    </>
  );
}

export default Navbar;
