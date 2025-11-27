import React from "react";

const services = [
  {
    title: "AI Chatbot",
    description:
      "Automated customer responses & instant conversational support.",
    icon: "/icons/ai-chatbot.png",
  },
  {
    title: "AI Appointment Scheduler",
    description: "Smart scheduling & reminders with no manual handling.",
    icon: "/icons/calendar.png",
  },
  {
    title: "Virtual AI Assistant",
    description: "Handles repetitive tasks and boosts productivity.",
    icon: "/icons/assistant.png",
  },
  {
    title: "Workflow Automation",
    description: "Automate processes like emails, tasks & CRM updates.",
    icon: "/icons/automation.png",
  },
  {
    title: "Customer Support Bot",
    description:
      "Resolve queries, escalate issues & track tickets automatically.",
    icon: "/icons/support.png",
  },
  {
    title: "Lead Qualification Bot",
    description: "Automatically analyze & filter high-potential leads.",
    icon: "/icons/leads.png",
  },
];

const Services = ({ openPopup }) => {
  return (
    <section id="services" className="services-container">
      <h2 className="services-title">Our AI Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button
              className="learn-btn"
              onClick={() => openPopup(service.title)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
