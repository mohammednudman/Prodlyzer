import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Prodlyzer
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ecom1" className="nav-link">
              FashionMantra
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ecom2" className="nav-link">
              KapdaBazar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ecom3" className="nav-link">
              MaxFashion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
