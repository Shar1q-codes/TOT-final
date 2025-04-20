// src/pages/About.jsx
import React from "react";
import "./About.css";
import aboutImage from "../assets/about-main.jpg"; // Add your image here
import missionImage from "../assets/about-mission.jpg"; // Add another image here

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
        <div className="about-image-container">
          <img src={aboutImage} alt="Healthcare team" className="about-img" />
        </div>
        <h1>About Us</h1>
        <h3>About TOT Healthcare Consultant</h3>
        <p>
          Your Trusted Revenue Cycle Partner in the U.S. Healthcare Landscape
          TOT Healthcare Consultant is a U.S.-based Revenue Cycle Management
          company committed to helping healthcare providers optimize their
          financial operations. With a team of certified professionals and
          cutting-edge technology, we offer fully HIPAA-compliant RCM services
          tailored to each provider’s specialty, volume, and goals.
        </p>
        <p>
          Whether you're a solo practitioner or a large hospital network, our
          solutions are scalable, cost-effective, and results-driven. We become
          a seamless extension of your team — driving collections, reducing
          denials, and enabling long-term financial health.
        </p>
      </section>

      <section className="about-mission">
        <div className="about-image-container">
          <img
            src={missionImage}
            alt="Mission of the company"
            className="about-img"
          />
        </div>
        <h2>Our Mission</h2>
        <p>
          To deliver efficient, transparent, and compliant RCM services that
          support better healthcare delivery in the U.S.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Vision</h2>
        <p>
          To be a leading U.S. RCM partner known for service excellence,
          innovation, and client success.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-list">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We operate with honesty, transparency, and ethical responsibility.
            </p>
          </div>
          <div className="value-card">
            <h3>Compliance</h3>
            <p>
              We adhere strictly to healthcare regulations and industry
              standards.
            </p>
          </div>
          <div className="value-card">
            <h3>Client-Centric</h3>
            <p>
              Your goals are our priority; we tailor every solution to meet your
              needs.
            </p>
          </div>
          <div className="value-card">
            <h3>Accuracy</h3>
            <p>We deliver precise, error-free solutions you can trust.</p>
          </div>
          <div className="value-card">
            <h3>Accountability</h3>
            <p>We take full ownership of our performance and results.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
