// src/pages/Programs.jsx
import React from "react";
import "./Programs.css";

const stats = [
  { label: "99% Coding & Billing Accuracy", icon: "✅" },
  { label: "90% First-Pass Clean Claim Rate", icon: "📈" },
  { label: "70+ Medical Specialties Served", icon: "🏥" },
  { label: "24/7 Customer Support", icon: "📞" },
  { label: "Over 20 Years of Industry Experience", icon: "⏳" },
  { label: "Dedicated RCM Managers", icon: "👥" },
];

const specialties = [
  "Internal Medicine",
  "Pathology",
  "Gastroenterology",
  "Radiology",
  "Nephrology",
  "Cardiology",
  "Psychiatry",
  "Oncology",
  "Pediatrics",
  "Ob/Gyn",
  "Physical Therapy",
  "Urology",
  "Dermatology",
  "Anesthesiology",
  "Nursing Homes",
  "Toxicology",
  "Orthopedic",
  "Ambulatory Surgery",
  "Genetics",
  "More...",
];

const Programs = () => {
  document.title =
    "Our Programs & Expertise | Triumphs of Talent Healthcare Consultants";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Explore our programs, specialties, and client success metrics. Learn how Triumphs of Talent supports healthcare providers with top-tier RCM solutions."
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "Trainer of Trainers, RCM expertise, Medical Specialties, Testimonials, Healthcare Billing Programs"
    );

  return (
    <div className="programs-page">
      <h1>Our Programs & Expertise</h1>

      <section className="stat-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="icon">{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="specialties">
        <h2>Specialties We Serve</h2>
        <ul>
          {specialties.map((spec, index) => (
            <li key={index}>✔ {spec}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Programs;
