// src/pages/Services.jsx
import React from "react";
import "./Services.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const servicesData = [
  {
    id: "pas",
    title: "Patient Access Services",
    bullets: [
      "Insurance eligibility & benefits verification",
      "Prior authorizations",
      "Demographic entry",
      "Patient pre-registration",
      "Financial counseling",
    ],
    image: "pas.jpg",
  },
  {
    id: "mccc",
    title: "Medical Coding & Charge Capture",
    bullets: [
      "CPT, ICD-10, and HCPCS coding",
      "HCC coding and risk adjustment",
      "Specialty-specific documentation reviews",
      "Certified coding audits",
      "Charge entry and claim scrubbing",
    ],
    image: "mccc.jpg",
  },
  {
    id: "cm",
    title: "Claims Management",
    bullets: [
      "Electronic & paper claims submission",
      "Clearinghouse rejections resolution",
      "Claim tracking and payer follow-up",
      "Timely filing assurance",
    ],
    image: "cm.jpg",
  },
  {
    id: "dma",
    title: "Denial Management & Appeals",
    bullets: [
      "Denial analysis and root cause identification",
      "Corrected claims and appeals submission",
      "Payer correspondence management",
      "Preventive denial strategy implementation",
    ],
    image: "dma.jpg",
  },
  {
    id: "arm",
    title: "Accounts Receivable (AR) Management",
    bullets: [
      "Insurance AR follow-up",
      "Patient balance statements & collections",
      "Secondary insurance billing",
      "Payment posting and reconciliation",
    ],
    image: "arm.jpg",
  },
  {
    id: "rcm",
    title: "RCM Analytics & Compliance Reporting",
    bullets: [
      "Customized dashboards & KPIs",
      "Monthly performance reports",
      "Audit support & compliance reports",
      "Financial forecasting tools",
    ],
    image: "rcm.jpg",
  },
  {
    id: "ccs",
    title: "Credentialing & Contracting Services",
    bullets: [
      "Provider Enrollment & Credentialing",
      "Re-Credentialing & Maintenance",
      "Payer Contract Negotiation",
      "CAQH Profile Management",
    ],
    image: "ccs.jpg",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          const yOffset = -100; // shift up by 100px
          const y =
            target.getBoundingClientRect().top +
            window.scrollY +
            yOffset -
            window.innerHeight / 2 +
            target.offsetHeight / 2;

          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  document.title = "Services | Triumphs of Talent Healthcare Consultants";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Explore Triumphs of Talent's expert billing and RCM services for SNFs, hospitals, telehealth, and more."
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "Medical Billing Services, RCM, SNF, Hospital Billing, Physician Billing, Telehealth Billing"
    );

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <h2>Revenue Cycle Management Services</h2>
      <h3>RCM Solutions Designed for the U.S. Healthcare System</h3>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index} id={service.id}>
            <div className="service-image">
              <img src={`/images/${service.image}`} alt={service.title} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <ul>
                {service.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
