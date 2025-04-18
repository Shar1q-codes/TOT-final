// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__company">
          <h4>Triumphs of Talent</h4>
          <p>
            Delivering expert healthcare billing and revenue cycle management
            services with precision, transparency, and care.
          </p>
        </div>
        <div className="footer__links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/programs">Programs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h5>Contact</h5>
          <p>Email: info@triumphsoftalent.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <div className="footer__socials">
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>{" "}
            |
            <a href="#" aria-label="Facebook">
              {" "}
              Facebook
            </a>{" "}
            |
            <a href="#" aria-label="Instagram">
              {" "}
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Triumphs of Talent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
