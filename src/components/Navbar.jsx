// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="/images/logo.png" alt="TOT HEALTHCARE CONSULTANTS LOGO" />
          <Link to="/">TOT Healthcare Consultants</Link>
        </div>

        <div className="navbar__menu">
          <div className={`navbar__links ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/programs" onClick={() => setIsOpen(false)}>
              Specialities
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>

          <button className="navbar__toggle" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
