// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  document.title = "About Us | Triumphs of Talent Healthcare Consultants";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Learn about Triumphs of Talent, a trusted partner in healthcare revenue cycle management. Explore our mission, values, and expertise."
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "About Triumphs of Talent, Healthcare Billing, RCM Company, Medical Consulting"
    );

  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          At Triumphs of Talent Healthcare Consultants, we specialize in
          optimizing revenue cycle management (RCM) processes for healthcare
          organizations. With a team of industry experts, cutting-edge
          technology, and a commitment to accuracy, we help providers reduce
          denials, boost cash flow, and maintain compliance.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower healthcare providers by delivering seamless and efficient
          RCM services that drive financial growth.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-list">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              Transparent and ethical practices in every aspect of our services.
            </p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We deliver consistent, high-quality results that exceed
              expectations.
            </p>
          </div>
          <div className="value-card">
            <h3>Client-Centric</h3>
            <p>
              We prioritize your success with personalized solutions tailored to
              your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
