import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Graphite Note</a>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li className="dropdown">
            <a href="#">For Data Analysts</a>
            <div className="dropdown-content">
              <a href="#">Home</a>
              <a href="#">How to Use It</a>
              <a href="#">Data Security and Protection</a>
              <a href="#">Use Cases</a>
              <a href="#">Models</a>
              <a href="#">Live Demos</a>
              <a href="#">Blog</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">For Performance Agencies</a>
            <div className="dropdown-content">
              <a href="#">Home</a>
              <a href="#">Whitelabel AI</a>
              <a href="#">How to Use It</a>
              <a href="#">Use Cases</a>
              <a href="#">Live Demos</a>
              <a href="#">Blog</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Resources</a>
            <div className="dropdown-content">
              <a href="#">Blog</a>
              <a href="#">Documentation</a>
              <a href="#">No-code AI Models</a>
              <a href="#">AI Use Cases</a>
              <a href="#">Live Demo Showcase</a>
              <a href="#">About Us</a>
              <a href="#">On-Demand Webinars</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <a href="#" className="btn signup">Sign Up</a>
        <a href="#" className="btn login">Log In</a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
