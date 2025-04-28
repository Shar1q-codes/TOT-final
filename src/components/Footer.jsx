// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__company">
          <h4>TOT Healthcare Solutions</h4>
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
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/programs">Specialities</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__links">
          <h5>Our Services</h5>
          <ul>
            <li>
              <a href="/services#pas">Patient Access Services</a>
            </li>
            <li>
              <a href="/services#mccc">Medical Coding & Charge Capture</a>
            </li>
            <li>
              <a href="/services#cm">Claims Management</a>
            </li>
            <li>
              <a href="/services#dma">Denial Management & Appeals</a>
            </li>
            <li>
              <a href="/services#arm">Accounts Receivable (AR) Management</a>
            </li>
            <li>
              <a href="/services#rcm">RCM Services</a>
            </li>
            <li>
              <a href="/services#ccs">Credentialing & Contracting Services</a>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h5>Contact</h5>
          <p>Email: contact@triumphsoftalent.com</p>
          <p>Phone: +1 (512) 222-3586</p>
          <p>
            Address: <br /> U.S. Address: 701 Tillery Street Unit 12‑3061
            Austin, Texas 78702, United States <br />
            <br />
            India Address: 4th Floor, Golden Chambers, Lakshmi Nagar Colony,
            Shaikpet, Hyderabad, Telangana 500008
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/company/tot-healthcare-consultants/?viewAsMember=true"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com" // replace with real link
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com" // replace with real link
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Group Companies Section */}
      <div className="footer__group">
        <img
          src="/images/tot_logo.png"
          alt="TOT Group Logo"
          className="group-logo"
        />
        <span>Group of Companies</span>
      </div>

      <div className="footer__bottom">
        <p>© 2015 Triumphs of Talent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
