import React from "react";

const Hero = ({ openPopup }) => {
  return (
    <section id="hero" className="hero-container">
      <h1 className="hero-heading">
        Build Smart AI Solutions That Automate Work & Accelerate Growth
      </h1>

      <p className="hero-description">
        We help startups and businesses integrate AI into real workflows —
        chatbots, automation systems, appointment scheduling and more.
      </p>

      <button className="hero-btn" onClick={() => openPopup("General Inquiry")}>
        Contact Us
      </button>
    </section>
  );
};

export default Hero;
