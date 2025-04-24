import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

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
          <Link to="/contact" className="cta-button">
            Request a Free Consultation
          </Link>
        </div>
      </section>
      {/* <div className="divider divider--wave-top"></div> */}

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>
            Welcome to Triumphs of Talent{" "}
            <span>Your Healthcare Revenue Partner</span>
          </h2>
          <div className="welcome-grid">
            <div className="welcome-card">
              <h3>Streamlined Revenue Cycles</h3>
              <p>
                We bring efficiency, transparency, and technology together to
                reduce claim denials and increase reimbursements.
              </p>
            </div>
            <div className="welcome-card">
              <h3>Personalized Strategies</h3>
              <p>
                Every provider is unique. We create tailored billing and RCM
                plans aligned with your goals and specialties.
              </p>
            </div>
            <div className="welcome-card">
              <h3>20+ Years of Expertise</h3>
              <p>
                Backed by decades of hands-on experience in SNF, Telehealth, and
                specialty billing for over 70 practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="quick-services">
        <h2>Our Services</h2>
        <ul>
          <li>✔ Family Medicine</li>
          <li>✔ Internal Medicine</li>
          <li>✔ Cardiology</li>
          <li>✔ Orthopedics</li>
          <li>✔ Gastroenterology</li>
          <li>✔ Neurology</li>
          <li>✔ OB/GYN</li>
          <li>✔ Pediatrics</li>
          <li>✔ Urology</li>
          <li>✔ Behavioral Health</li>
          <li>✔ Chiropractic</li>
          <li>✔ Podiatry</li>
          <li>✔ Radiology</li>
          <li>✔ Urgent Care</li>
          <li>✔ Home Health</li>
          <li>✔ Sleep Medicine</li>
          <li>✔ Pain Management</li>
          <li>✔ Oncology</li>
        </ul>
        <a href="/services" className="secondary-cta">
          Explore Our Full Service Offering →
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why TOT Healthcare Solutions?</h2>
        <ul>
          <li>✅ 99% Claim Acceptance Rate</li>
          <li>✅ 50% Cost Saving On Overhead Staff</li>
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
