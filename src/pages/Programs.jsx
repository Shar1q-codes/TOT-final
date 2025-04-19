// src/pages/Programs.jsx
import React, { useEffect } from "react";
import "./Programs.css";

const stats = [
  { icon: "👨‍⚕️", label: "50+ Specialists Served" },
  { icon: "💼", label: "20+ Healthcare Organizations" },
  { icon: "🌎", label: "Global Client Base" },
  { icon: "⏱️", label: "24-48 Hour Turnaround Time" },
  { icon: "📊", label: "98% Claim Approval Rate" },
  { icon: "✅", label: "99% Client Satisfaction" },
];

const Programs = () => {
  useEffect(() => {
    document.title = "Programs | Triumphs of Talent Healthcare Consultants";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Discover our specialties, software tools, and workflow that streamline healthcare billing and consulting."
      );
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "TOT Healthcare Programs, Specialties, Billing Workflow, RCM Tools, EHR Software"
      );
  }, []);

  return (
    <div className="programs-page">
      <h1>Our Programs</h1>

      <div className="stat-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="icon">{stat.icon}</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* New Sections Below */}
      <section className="programs-section">
        <h2>Our Expertise</h2>
        <div className="programs-image-wrapper">
          <img src="/images/1.png" alt="Our Expertise" />
        </div>
      </section>

      <section className="programs-section">
        <h2>Softwares We Use</h2>
        <div className="programs-image-wrapper">
          <img src="/images/2.png" alt="Softwares We Use" />
        </div>
      </section>

      <section className="programs-section">
        <h2>Our Workflow</h2>
        <div className="programs-image-wrapper">
          <img src="/images/3.png" alt="Our Workflow" />
        </div>
      </section>
    </div>
  );
};

export default Programs;
