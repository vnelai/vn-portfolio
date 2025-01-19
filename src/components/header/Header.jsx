import React from 'react';
import './Header.css';

function Header({toggleDarkMode}) {
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
                    <li><a href="/projects"></a></li>
                    <li><a href="/blog"></a></li>
                    <li><a href="/contact"></a></li>
                </ul>
            </nav>
        </div>

        {/* Right Section: Mode Toggle */}
        <div className='mode-toggle'>
            <button onClick={toggleDarkMode}>🌙/🌞</button>
        </div>
    </header>
  );
};

export default Header;