import React from "react";
import "../style/components-style/NavBar.scss";
import "../style/Main.scss";

const Navbar = () => {
  return (
    <div className="our_container">
      <div className="NavBar">
        <div className="nav-left">
          <a href="#" className="logo">
            <img
              alt=""
              src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
            />
          </a>
          <a href="#" className="nav-links">
            How It Works
          </a>
          <a href="#" className="nav-links">
            Browse Jobs
          </a>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-links">
            Log In
          </a>
          <a href="#" className="nav-links">
            Sign Up
          </a>
          <a href="#" className="nav-btn">
            Post a Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
