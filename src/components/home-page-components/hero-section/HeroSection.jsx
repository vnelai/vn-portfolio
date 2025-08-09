import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    if (h1Ref.current) observer.observe(h1Ref.current);
    if (h2Ref.current) observer.observe(h2Ref.current);
    if (pRef.current) observer.observe(pRef.current);

    return () => {
      if (h1Ref.current) observer.unobserve(h1Ref.current);
      if (h2Ref.current) observer.unobserve(h2Ref.current);
      if (pRef.current) observer.unobserve(pRef.current);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background mesh */}
      <svg
        className="hero-bg"
        viewBox="0 0 1600 900"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="rg" cx="50%" cy="45%" r="70%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="fade">
            <rect width="100%" height="100%" fill="url(#rg)" />
          </mask>
          <pattern
            id="mesh"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            {/* lines */}
            <g className="link">
              <path d="M0 40H160 M0 120H160 M40 0V160 M120 0V160" />
              <path d="M0 0L160 160 M160 0L0 160" />
            </g>
            {/* dots */}
            <g className="node">
              <circle cx="40" cy="40" r="2" />
              <circle cx="120" cy="40" r="2" />
              <circle cx="40" cy="120" r="2" />
              <circle cx="120" cy="120" r="2" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" mask="url(#fade)" />
      </svg>
      {/* Hero text/buttons */}
      <div className="hero-content">
        <h1 ref={h2Ref}>Cybersecurity Analyst with an Engineer’s Mindset</h1>
        <h2 ref={pRef}>
          I detect threats, secure systems, and protect the people behind them.
        </h2>
        <div className="hero-btns-div">
          <Link to="/projects/topic/all" className="hero-btn">
            💻 View Projects
          </Link>
          <Link to="/blog/topic/all" className="hero-btn">
            ✍️ View Blog
          </Link>
          <a
            href="/api/get-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            📄 Get Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
