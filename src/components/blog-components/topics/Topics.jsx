import React, { useState } from "react";
import "./Topics.css";

function Topics({ onTopicSelect }) {
  const [activeTopic, setActiveTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setActiveTopic(topic);
    onTopicSelect(topic); // Pass the selected topic to the parent
  };

  return (
    <section id="topics" className="section">
      <h2 className="section-title">🧠 Explore by Topic</h2>
      <div className="topic-buttons">
        <div className="line1">
          <button
            className="topic"
            onClick={() => handleTopicSelect("Career & Journey")}
          >
            Career & Journey
          </button>
          <button
            className="topic"
            onClick={() => handleTopicSelect("Certifications & Learning")}
          >
            Certifications & Learning
          </button>
          <button
            className="topic"
            onClick={() => handleTopicSelect("Hands-On Labs & Tools")}
          >
            Hands-On Labs & Tools
          </button>
          <button
            className="topic"
            onClick={() => handleTopicSelect("Cybersecurity (Beginner to Pro)")}
          >
            Cybersecurity (Beginner to Pro)
          </button>
        </div>
        <div className="line2">
          <button
            className="topic"
            onClick={() => handleTopicSelect("Cloud, DevOps & DevSecOps")}
          >
            Cloud, DevOps & DevSecOps
          </button>
          <button
            className="topic"
            onClick={() => handleTopicSelect("Bootcamp & Self-Taught Life")}
          >
            Bootcamp & Self-Taught Life
          </button>
          <button
            className="topic"
            onClick={() => handleTopicSelect("Freelance & Remote Life")}
          >
            Freelance & Remote Life
          </button>
        </div>
      </div>
    </section>
  );
}

export default Topics;
