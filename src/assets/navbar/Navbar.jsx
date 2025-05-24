import React, { useState } from "react";
import "./Navbar.css";
import ASLogo from "../pictures/AS.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <a href = "/home">
        <div className="navbar-brand">
          <img
            src={ASLogo}
            alt="AS Logo"
            style={{ height: "80px", width: "auto", objectFit: "contain" }}
          />
        </div>
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/service" onClick={() => setIsOpen(false)}>
              Service
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <div />
          <div />
          <div />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
