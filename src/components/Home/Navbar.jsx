import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Home/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-dark sticky">
        <div className="container">
          <img src="./img/duportLogo.png" height="50px" width="150px" alt="" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation-light"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  activeClassName="active"
                  to="about"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="ourteam">
                  OUR TEAM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="media">
                  MEDIA AND NEWS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
