import React from 'react'
import './StayConnected.css'

function StayConnected() {
  return (
    <div className='stay-connected'>
        <h1>Stay Connected</h1>
        <h2>Find me on LinkedIn, explore my work on GitHub, or reach out via email.</h2>
        
        <div className="social-media-div">
          <a href="https://github.com/vnelai" className="sm-button github" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/virginianelai/" className="sm-button linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:vnelai01@gmail.com" className="sm-button google" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-google"></i>
          </a>
        </div>

        {/* Newsletter Sign-Up Section */}
        <div className="newsletter-signup">
          <h3>Join My Newsletter</h3>
          <p>Get the latest updates and tech insights straight to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="form-btn">Subscribe</button>
          </form>
        </div>
    </div>    
  );
}

export default StayConnected;
