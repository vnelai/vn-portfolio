import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">© {new Date().getFullYear()} Virginia Nelai</div>
      <div className="footer-right">
        <a href="https://github.com/vnelai" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/virginianelai/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:vnelai01@gmail.com">
            <SiGoogle />
        </a>
      </div>
    </footer>
  );
}

export default Footer;