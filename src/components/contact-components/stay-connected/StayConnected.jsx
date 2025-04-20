import React from 'react'
import './StayConnected.css'

function StayConnected() {
  return (
    <div className='stay-connected'>
        <h1>Stay Connected</h1>
        <h2>Find me on LinkedIn, explore my work on GitHub, or reach out via email.</h2>
        <div class="social-media-div">
        <a
            href="https://github.com/vnelai"
            class="sm-button github"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fa-brands fa-github"></i>
        </a>
        <a
            href="https://www.linkedin.com/in/virginianelai/"
            class="sm-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a
            href="mailto:vnelai01@gmail.com"
            class="sm-button google"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fa-brands fa-google"></i>
        </a>
        </div>
    </div>    
  );
}

export default StayConnected;