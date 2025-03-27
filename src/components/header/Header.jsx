import React, { useState } from "react";
import "./Header.css";

function Header({ toggleDarkMode, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <header>
      {/* Logo / Brand Name */}
      <div className="logo">
        <a  href="/">Virginia</a>
      </div>

       {/* Hamburger Menu */}
       <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i> {/* Hamburger icon */}
      </div>

      {/* Menu items */}
      <div className={`menu-container ${isMenuOpen ? "active" : ""}`}>
        <nav className="menu">
          <ul>
            <li>
              <a href="/about-me">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Light/Dark Mode Toggle */}
      <div className="mode-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="fas fa-sun"></i> // Sun icon for light mode
          ) : (
            <i className="fas fa-moon"></i> // Moon icon for dark mode
          )}
        </button>
      </div>

    </header>
  );
}

export default Header;
