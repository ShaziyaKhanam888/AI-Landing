import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactPopup from "./components/ContactPopup";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openPopup = (serviceName = "General Inquiry") => {
    setSelectedService(serviceName);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setSelectedService("");
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Hero openPopup={openPopup} />
        <Services openPopup={openPopup} />
      </div>

      <ContactPopup
        isOpen={open}
        onClose={closePopup}
        selectedService={selectedService}
      />

      <Footer />
    </>
  );
}

export default App;
