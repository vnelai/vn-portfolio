import React from "react";
import "./TechSkills.css";
import { motion } from "framer-motion";

const softwareEngineeringSkills = [
  { icon: "fab fa-python", name: "Python" },
  { icon: "fab fa-js-square", name: "JavaScript" },
  { icon: "fab fa-react", name: "React" },
  { icon: "fab fa-node", name: "Node.js" },
  { icon: "fas fa-server", name: "Express.js" },
  { icon: "fas fa-database", name: "MongoDB" }, 
  { icon: "fas fa-database", name: "SQL" }, 
  { icon: "fab fa-git-alt", name: "Git" }, 
  { icon: "fab fa-linux", name: "Linux" },
  { icon: "fas fa-plug", name: "API" },
  { icon: "fab fa-js-square", name: "TypeScript" },
  // { icon: "fab fa-aws", name: "AWS" },
  // { icon: "fab fa-docker", name: "Docker" }, // Containers
];

const cyberSecuritySkills = [
  { icon: "fas fa-lock", name: "Crypto" },
  { icon: "fas fa-network-wired", name: "Network Sec" },
  { icon: "fas fa-shield-alt", name: "Firewalls" },
  { icon: "fas fa-cloud", name: "VPN" },
  { icon: "fas fa-users-cog", name: "IAM" },
  { icon: "fas fa-bug", name: "Pentesting" },
  { icon: "fas fa-user-secret", name: "Metasploit" },
  { icon: "fas fa-bug", name: "Burp Suite" },
  { icon: "fas fa-search", name: "Incident Resp" },
  { icon: "fas fa-shield-virus", name: "Malware" },
  { icon: "fas fa-tachometer-alt", name: "Monitoring" },
  //   { icon: "fab fa-aws", name: "AWS Sec" },
  //   { icon: "fab fa-google", name: "Google Sec" },
];

function TechSkills() {
  // Function to duplicate skills for seamless scrolling
  const duplicateSkills = (skills) => [...skills, ...skills, ...skills]; // Clone skills array

  return (
    <section>
      {/* Software Engineering Skills Section with Animation */}
      <div className="skills-section software-skills">
        <h2>Software Engineering Skills</h2>
        <div className="skills-container">
          <div className="skills-wrapper">
            {duplicateSkills(softwareEngineeringSkills).map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cybersecurity Skills Section with Animation */}
      <div className="skills-section cyber-skills">
        <h2>Cybersecurity Skills</h2>
        <div className="skills-container">
          <div className="skills-wrapper">
            {duplicateSkills(cyberSecuritySkills).map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSkills;
