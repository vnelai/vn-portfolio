import React from "react";
import "./Journey.css";

function Journey({ isDarkMode }) {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>My Journey</h1>
          <p>
          Versatile and driven, I&apos;m a software engineer with a strong foundation
          in full-stack development (MERN, JavaScript) and a cybersecurity enthusiast 
          passionate about identifying vulnerabilities and securing systems. I thrive 
          on the challenge of uncovering weaknesses in software and infrastructure while 
          building secure, scalable solutions. After graduating as valedictorian from an 
          intensive software engineering bootcamp, I&apos;ve continued to sharpen my skills through
          freelance projects, Capture the Flag competitions, and hands-on labs like TryHackMe.
          </p>
          <p>
          My journey began in science, but curiosity and adaptability led me into tech—where 
          I thrive at the intersection of problem-solving and innovation. I&apos;m energized by 
          environments where I can apply what I learn, explore new technologies, and collaborate 
          to solve meaningful challenges. With leadership experience across multiple industries, 
          I bring not only technical expertise but also business acumen, strategic thinking, and 
          a collaborative mindset. I understand how to deliver tech solutions that drive real business impact.
          </p>
          <p>
          I hold certifications in CompTIA A+, Network+, Security+, and AWS Cloud Practitioner, 
          and I&apos;m currently preparing for the AWS Security Specialty to deepen my expertise in 
          cloud security. Whether I&apos;m writing clean code, debugging APIs, or hardening infrastructure, 
          I stay focused on creating value through analytical thinking, secure practices, and a grounded, 
          get-it-done approach.
          </p>
          <p>
            Let&apos;s connect if you&apos;re looking for someone who&apos;s passionate, reliable, and always leveling up
            —whether it&apos;s for a project, freelance opportunity, or a security-focused build.
          </p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="about-image">
          <img
            src={
              isDarkMode
                ? `/PURPLE GRADIENT.png`
                : `/BLUE GRADIENT.png`
            }
            alt="professional-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Journey;
