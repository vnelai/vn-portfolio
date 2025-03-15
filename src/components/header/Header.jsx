import React, { useState } from "react";
import "./Header.css";

function Header({ toggleDarkMode, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <header>
      {/* Left Section: Logo / Name */}
      <div className="header-left">
        <a href="/">Virginia</a>
      </div>

      {/* Center Section: Menu items */}
      <div className="menu-container">
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

      {/* Right Section: Mode Toggle */}
      <div className="mode-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="fas fa-sun"></i> // Sun icon for light mode
          ) : (
            <i className="fas fa-moon"></i> // Moon icon for dark mode
          )}
        </button>
      </div>

      {/* Right Section: Hamburger Menu (visible only on mobile) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* Hamburger icon */}
      </div>

    </header>
  );
}

export default Header;
