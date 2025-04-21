import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown on desktop leave / mobile resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsDropdownOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="/images/logo.png" alt="TOT HEALTHCARE CONSULTANTS LOGO" />
          <Link to="/">TOT Healthcare Consultants</Link>
        </div>
        <div className="navbar__menu">
          <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li
              className="dropdown-parent"
              onMouseEnter={() =>
                window.innerWidth > 768 && setIsDropdownOpen(true)
              }
              onMouseLeave={() =>
                window.innerWidth > 768 && setIsDropdownOpen(false)
              }
            >
              <Link
                to="/services"
                className="dropdown-toggle"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Services {isDropdownOpen ? "▾" : "▸"}
              </Link>
              <ul className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
                <li>
                  <a href="/services#pas" onClick={() => setIsOpen(false)}>
                    Patient Access Services
                  </a>
                </li>
                <li>
                  <a href="/services#mccc" onClick={() => setIsOpen(false)}>
                    Medical Coding & Charge Capture
                  </a>
                </li>
                <li>
                  <a href="/services#cm" onClick={() => setIsOpen(false)}>
                    Claims Management
                  </a>
                </li>
                <li>
                  <a href="/services#dma" onClick={() => setIsOpen(false)}>
                    Denial Management & Appeals
                  </a>
                </li>
                <li>
                  <a href="/services#arm" onClick={() => setIsOpen(false)}>
                    AR Management
                  </a>
                </li>
                <li>
                  <a href="/services#rcm" onClick={() => setIsOpen(false)}>
                    RCM Analytics
                  </a>
                </li>
                <li>
                  <a href="/services#ccs" onClick={() => setIsOpen(false)}>
                    Credentialing Services
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/programs" onClick={() => setIsOpen(false)}>
                Specialities
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
