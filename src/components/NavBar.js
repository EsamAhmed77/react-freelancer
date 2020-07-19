import React from "react";
import "./style/NavBar.scss";
import "./style/Main.scss";

const Navbar = () => {
  return (
    <div className="our-navbar">
      <div className="our-container">
        <div className="NavBar d-flex justify-content-between align-items-center">
          <div className="nav-left d-flex align-items-center justify-content-between">
            <a href="\" className="logo">
              <img alt="logo" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"/>
            </a>
            <a href="\" className="nav-links">How It Works</a>
            <a href="\" className="nav-links">Browse Jobs</a>
          </div>
          <div className="nav-right d-flex align-items-center justify-content-between">
            <a href="\" className="nav-links">Log In</a>
            <a href="\" className="nav-links">Sign Up</a>
            <a href="\" className="nav-btn">Post a Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
