import React, { useRef, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
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
    <section className='hero-section'>
      <div className='hero-content'>
        <h1 ref={h2Ref}>Software Engineer & Cybersecurity Professional</h1>
        <h2 ref={pRef}>
          Passionate about finding vulnerabilities and building secure, user-friendly web applications.
        </h2>
        <div className='hero-btns-div'>
          <a
            href='/public/Virginia_Nelai _Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='hero-btn'
          >
            <i className='fa-solid fa-download'></i> Get Resume
          </a>
          <a href='/projects' className='hero-btn'>
            <i className='fa-solid fa-folder-open'></i> View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;