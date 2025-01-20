import React from 'react';
import './Header.css';

function Header({toggleDarkMode, isDarkMode}) {
  return (
    <header>
        {/* Left Section: Logo / Name */}
        <div className='header-left'>
            <a href="/">Virginia</a>
        </div>

        {/* Menu items */}
        <div className='menu-container'>
            <nav className='menu'>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>

        {/* Right Section: Mode Toggle */}
        <div className='mode-toggle'>
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
};

export default Header;