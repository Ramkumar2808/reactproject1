import React from "react";
import Heroimg from "../../img/profile3.png";
import "./Herosection.css";

function HeroSection() {
  return (
    <div id="hero-section">
      <div id="hero-details">
        <h4>Hello I'm</h4>
        <h2>Ram Kumar. S</h2>
        <p>UI & Ux</p>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-codepen" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-free-code-camp" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <a href="#" id="hire-me">
          Hire Me
        </a>
        <a href="#" id="see-my-resume">
          See My Resume
        </a>
      </div>
      <div id="hero-img">
        <img src={Heroimg} alt="Hero-img" />
      </div>
    </div>
  );
}

export default HeroSection;
