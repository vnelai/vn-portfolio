import React from "react";
import "./Journey.css";

function Journey({ isDarkMode }) {
  return (
    <section id="journey" className="about-container">
      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>My Journey</h1>
          <p>
            I’ve always been drawn to discovery, whether it was physics and math
            in school or later exploring data through analytics. I explored
            biology, business, and leadership roles. Each taught me something
            different as I kept searching for the right place to apply it all. A
            data analytics course got me into programming, and from there I
            followed the thread from software, to networks, and finally to
            cybersecurity. While working at a hospital, the UnitedHealthcare
            ransomware incident showed me how much damage a single attack can
            cause. That was the spark. Security isn’t just theory, it protects
            real people every day.
          </p>
          <p>
            I began with a bootcamp where I learned to build and troubleshoot
            systems, skills that became the base for my move into cybersecurity.
            Over time, I immersed myself in hands-on learning, spending hours on
            Hack The Box, TryHackMe, and picoCTF, working through labs and
            challenges that pushed me to think like both an attacker and a
            defender. I dug into projects like phishing investigations,
            detection engineering, and threat-intel notes. That's when it
            clicked for me. Cybersecurity wasn’t just an interest, it was the
            challenge I wanted to keep chasing.
          </p>
          <p>
            I’m pursuing my M.S. in Cybersecurity at NYU. My foundation in
            software engineering gives me an edge in automation,
            problem-solving, and secure development. ’m currently focused on
            offensive skills through the eJPT and labs, while also learning how
            those same attacks are detected and defended. That mix keeps me
            adaptable and able to contribute across security teams. I hold
            CompTIA A+, Network+, Security+, and AWS Cloud Practitioner, with
            eJPT in progress.
          </p>
          <p>
            I grow the most through practical experience, whether it’s writing
            detection rules, testing exploits, or hardening infrastructure. I
            bring curiosity, persistence, and a get-it-done mindset to every
            project. I also share what I learn, whether it’s through my blog,
            conversations at work, or just hanging out with others. Because I
            believe documenting and passing on knowledge helps the whole
            community grow. Let’s connect if you’re looking for someone who’s
            hands-on, reliable, and always learning.
          </p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="about-image">
          <img
            src={isDarkMode ? "/PURPLE2 GRADIENT.png" : "/TEAL GRADIENT.png"}
            alt="professional-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Journey;
