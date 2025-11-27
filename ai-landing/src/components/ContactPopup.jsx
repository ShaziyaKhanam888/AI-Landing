import React, { useState, useEffect } from "react";

const ContactPopup = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // when popup opens, prefill message
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        message: `I want to know more about: ${
          selectedService || "your services"
        }`,
      }));
    } else {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [isOpen, selectedService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo behavior: alert + close
    alert("Message Sent: " + formData.message);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Contact Us</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
