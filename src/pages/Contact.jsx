import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  document.title = "Contact Us | Triumphs of Talent Healthcare Consultants";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Get in touch with Triumphs of Talent for professional healthcare billing and RCM support."
    );
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "Contact, RCM Services, Medical Billing, Healthcare Consultants"
    );

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    speciality: "",
    state: "",
    enquiry: "",
    message: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("Sending...");
    emailjs
      .send(
        "service_g9ztbhb", // your Service ID
        "template_8m0c46k", // your Template ID
        formData,
        "6H8zR9HCWU3TrYWfh" // your Public Key
      )
      .then(
        () => {
          setResponse("Message sent successfully.");
          setFormData({
            name: "",
            company: "",
            phone: "",
            speciality: "",
            state: "",
            enquiry: "Full time equivalent model",
            message: "",
          });
        },
        (err) => {
          console.error(err);
          setResponse("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <h1>Schedule yourself a Consultation!</h1>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone No.</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="speciality">Your Speciality</label>
          <input
            id="speciality"
            type="text"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">What is your enquiry about</label>
          <select
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Select your enquiry
            </option>
            <option value="Full time equivalent model">
              Full time equivalent model
            </option>
            <option value="Medical billing services">
              Medical billing services
            </option>
            <option value="RCM consultation services">
              RCM consultation services
            </option>
            <option value="Medical coding services">
              Medical coding services
            </option>
            <option value="Credentialing services">
              Credentialing services
            </option>
            <option value="Eligibility verification services">
              Eligibility verification services
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        {response && <p className="response">{response}</p>}
      </form>

      {/* Address & Map Cards */}
      <section className="address-cards">
        {/* First Location */}
        <div className="address-card">
          <div className="address-text">
            <h2>Our U.S. Location</h2>
            <p>701 Tillery Street Unit 12‑3061</p>
            <p>Austin, Texas 78702, United States</p>
          </div>
          <div className="map-container">
            <iframe
              title="Austin Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.3872575275036!2d-97.70651448888482!3d30.260414908200776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5d17ddd1c6d%3A0x4b487a931a3ec95a!2s701%20Tillery%20St%2012%203061%2C%20Austin%2C%20TX%2078702%2C%20USA!5e1!3m2!1sen!2sin!4v1745313012642!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Second Location */}
        <div className="address-card second">
          <div className="map-container">
            <iframe
              title="TOT Healthcare Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.531135060187!2d78.38689657499829!3d17.433454101313097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96f51b1b85e7%3A0x3e7d8f67e47307de!2sGolden%20Chambers%2C%20Lakshmi%20Nagar%20Colony%2C%20Shaikpet%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1713624480291!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address-text second-text">
            <h2>Our India Location</h2>
            <p>4th Floor, Golden Chambers,</p>
            <p>Lakshmi Nagar Colony, Shaikpet,</p>
            <p>Hyderabad, Telangana 500008</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
