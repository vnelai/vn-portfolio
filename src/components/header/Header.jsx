import React from 'react';
import './Header.css';

function Header({toggleDarkMode?}) {
  return (
    <header>
        {/* Logo top left of page */}
        <div className='logo-name'>
            <a href="/">Virginia</a>
        </div>

        {/* Menu items */}
        <nav className='menu'>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/projects"></a></li>
                <li><a href="/blog"></a></li>
                <li><a href="/contact"></a></li>
            </ul>
        </nav>

        {/* Light/Dark mode toggle */}
        <div className='mode-toggle'>
            <button onClick={toggleDarkMode}>🌙/🌞</button>
        </div>
    </header>
  );
};

export default Header;