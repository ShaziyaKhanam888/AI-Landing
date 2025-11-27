import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">AI Services</h2>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("footer")}>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
