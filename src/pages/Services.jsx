// src/pages/Services.jsx
import React from "react";

const servicesData = [
  {
    title: "SNF Billing",
    desc: "Specialized Skilled Nursing Facility (SNF) billing services designed to increase reimbursements while ensuring compliance.",
    bullets: [
      "Accurate patient eligibility verification",
      "Precise coding and claims submission",
      "Denial management and appeals",
      "Medicare, Medicaid, and private insurance billing",
    ],
    benefits: [
      "Improved cash flow",
      "Reduced claim denials",
      "Compliance with SNF billing regulations",
    ],
    image: "snf.jpg",
  },
  {
    title: "Hospital Billing",
    desc: "Comprehensive hospital billing services, ensuring precise claims processing, reduced denials, and accelerated reimbursements.",
    bullets: [
      "Patient registration and insurance verification",
      "Accurate inpatient and outpatient coding",
      "Claims submission and payment posting",
      "AR follow-up and denial management",
    ],
    benefits: [
      "Faster reimbursements",
      "Improved revenue cycle efficiency",
      "Compliance with payer guidelines",
    ],
    image: "hospital.jpg",
  },
  {
    title: "Physician Billing",
    desc: "End-to-end physician billing services ensuring accurate coding, timely claims submission, and maximum reimbursements.",
    bullets: [
      "Patient eligibility verification",
      "Charge entry and claims submission",
      "Payment posting and reconciliation",
      "AR follow-up and denial management",
    ],
    benefits: [
      "Reduced claim denials",
      "Faster reimbursement cycles",
      "Comprehensive compliance and reporting",
    ],
    image: "physician.jpg",
  },
  {
    title: "Rural Health Billing",
    desc: "Expert Rural Health Billing services to maximize reimbursements and ensure compliance with payer regulations.",
    bullets: [
      "Eligibility verification and registration",
      "CPT and HCPCS coding",
      "Claims submission and payment posting",
      "AR follow-up and denial management",
    ],
    benefits: [
      "Faster reimbursements",
      "Compliance with rural billing",
      "Transparent reporting and analytics",
    ],
    image: "rural.jpg",
  },
  {
    title: "Telehealth Billing",
    desc: "Ensure healthcare providers offering telehealth services get paid promptly and accurately.",
    bullets: [
      "Telehealth coverage eligibility verification",
      "Accurate CPT and HCPCS coding",
      "Claims submission and payment posting",
      "AR follow-up and denial management",
    ],
    benefits: [
      "Expertise in telehealth billing",
      "Faster payments",
      "Compliance with all guidelines",
    ],
    image: "telehealth.jpg",
  },
  {
    title: "RCM Services",
    desc: "End-to-end RCM solutions to help medical practices optimize performance and reduce burdens.",
    bullets: [
      "Registration and eligibility verification",
      "Medical coding and charge capture",
      "Claims submission and follow-up",
      "Payment reconciliation and appeals",
    ],
    benefits: [
      "Higher clean claim rates",
      "Faster payments",
      "Analytics and transparency",
    ],
    image: "rcm.jpg",
  },
];

const Services = () => {
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
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={`/images/${service.image}`} alt={service.title} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <ul>
                {service.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="benefits">
                <strong>Benefits:</strong>
                <ul>
                  {service.benefits.map((b, i) => (
                    <li key={i}>✅ {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
