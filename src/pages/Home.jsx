// src/pages/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  document.title = "Home | Triumphs of Talent Healthcare Consultants";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Empowering healthcare providers with revenue-focused billing, RCM solutions, and expert consulting."
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "Healthcare billing, RCM consultants, SNF billing, Telehealth billing, Medical Revenue Solutions"
    );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Healthcare with Talent, Technology & Strategy</h1>
          <p>
            Delivering smart, scalable solutions in medical billing and revenue
            cycle management — designed to help healthcare providers operate
            more efficiently, get paid faster, and stay focused on patient care.
          </p>
          <a href="/contact" className="cta-button">
            Request a Free Consultation
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to Triumphs of Talent — Your Healthcare Revenue Partner</h2>
        <p>
          At Triumphs of Talent Healthcare Consultants, we combine industry
          expertise, cutting-edge technology, and proven strategies to
          streamline your revenue cycle from end to end. Whether you run a
          hospital, clinic, telehealth service, or rural health center, our team
          is dedicated to improving your reimbursements, reducing denials, and
          ensuring compliance every step of the way.
        </p>
        <p>
          Backed by 8+ years of experience, we are proud to support healthcare
          organizations across the country with solutions that are as
          personalized as they are powerful.
        </p>
      </section>

      {/* Services Section */}
      <section className="quick-services">
        <h2>Precision-Driven Billing & RCM Services</h2>
        <ul>
          <li>✔ Skilled Nursing Facility (SNF) Billing</li>
          <li>✔ Physician Billing</li>
          <li>✔ Hospital Billing</li>
          <li>✔ Rural Health Clinic Billing</li>
          <li>✔ Telehealth Billing</li>
          <li>✔ Complete Revenue Cycle Management (RCM)</li>
        </ul>
        <a href="/services" className="secondary-cta">
          Explore Our Full Service Offering →
        </a>
      </section>

      {/* Why Choose Us (Optional Section) */}
      <section className="why-choose-us">
        <h2>Why Choose Triumphs of Talent?</h2>
        <ul>
          <li>✅ 99% Claim Acceptance Rate</li>
          <li>✅ 24/7 Client Support</li>
          <li>✅ Dedicated Account Managers</li>
          <li>✅ HIPAA-Compliant Processes</li>
          <li>✅ Transparent Reporting & Analytics</li>
          <li>✅ Serving 70+ Medical Specialties</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
