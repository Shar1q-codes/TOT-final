// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// ← import HashLink
import { HashLink } from "react-router-hash-link";
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

  const handleDropdownClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="/images/logo.png" alt="TOT HEALTHCARE CONSULTANTS LOGO" />
          <Link to="/">TOT Healthcare Solutions LLC</Link>
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
                onClick={handleDropdownClick}
              >
                Services {isDropdownOpen ? "▾" : "▸"}
              </Link>

              {/* ---- only this <ul> changed: use HashLink instead of <a> ---- */}
              <ul className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
                <li>
                  <HashLink
                    smooth
                    to="/services#pas"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Patient Access Services
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/services#mccc"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Medical Coding & Charge Capture
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/services#cm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Claims Management
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/services#dma"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Denial Management & Appeals
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/services#arm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    AR Management
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/services#rcm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    RCM Analytics
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/services#ccs"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Credentialing Services
                  </HashLink>
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
