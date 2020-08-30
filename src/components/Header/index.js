import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/getmebaked_logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div>
        <NavLink
          className="navbar-brand"
          to="/"
          style={{
            position: "absolute",
            marginLeft: "1rem",
            top: 0,
            left: 0,
            zIndex: 2
          }}
        >
          <img src={logo} alt="" style={{
            maxWidth: '5rem'
          }}/>
        </NavLink>
        <nav
          className="navbar navbar-expand-lg navbar-light flex-row-reverse"
          style={{ 
            zIndex: 1
          }}
        >
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginTop: '0.25rem'}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
            style={{ marginTop: '2.5rem'}}
          >
            <div className="navbar-nav align-items-center">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
