// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">Triumphs of Talent</Link>
      </div>
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
