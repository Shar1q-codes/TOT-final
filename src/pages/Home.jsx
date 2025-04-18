// src/pages/Home.jsx
import React from "react";

const Home = () => {
  document.title = "Home | Triumphs of Talent Healthcare Consultants";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Professional Revenue Cycle Management (RCM) services for healthcare providers. Expert billing solutions by Triumphs of Talent."
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "RCM, Medical Billing, SNF, Physician Billing, Hospital Billing, Healthcare Consulting"
    );

  return (
    <div className="homepage">
      <header className="hero">
        <h1>Revenue Cycle Management Simplified</h1>
        <p>
          Triumphs of Talent Healthcare Consultants empowers healthcare
          providers with expert RCM solutions, streamlining billing, maximizing
          reimbursements, and reducing administrative burdens.
        </p>
        <a href="#contact" className="cta-button">
          Get a Free RCM Audit Today
        </a>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>SNF Billing</li>
          <li>Physician Billing</li>
          <li>Hospital Billing</li>
          <li>Rural Health Billing</li>
          <li>Telehealth Billing</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ 99% Claim Acceptance Rate</li>
          <li>✅ Faster Reimbursements</li>
          <li>✅ Dedicated RCM Experts</li>
          <li>✅ Compliance with evolving regulations</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
