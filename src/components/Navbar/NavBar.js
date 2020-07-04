import React from "react";
import "../style/components-style/NavBar.scss";
import "../style/Main.scss";

const Navbar = () => {
  return (
    <div className="our_container">
      <div className="NavBar d-flex justify-content-between align-items-center">
        <div className="nav_left">
          <a href="\" className="logo">
            <img
              alt=""
              src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
            />
          </a>
          <a href="\" className="nav_links">
            How It Works
          </a>
          <a href="\" className="nav_links">
            Browse Jobs
          </a>
        </div>
        <div className="nav_right">
          <a href="\" className="nav_links">
            Log In
          </a>
          <a href="\" className="nav_links">
            Sign Up
          </a>
          <a href="\" className="nav_btn">
            Post a Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
