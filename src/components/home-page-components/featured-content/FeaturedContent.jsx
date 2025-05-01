// FeaturedProject.jsx:
import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedContent.css";
import { useInView } from "react-intersection-observer";

function FeaturedContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`featured-content ${inView ? "fade-in" : ""}`}
    >
      <div className="content-grid">
        <div className="featured-teaser">
          <img src="/Meal_Prep_Pro.png" alt="Project Thumbnail" />
          <div className="featured-text">
            <h2>🚀 Featured Project: Smart Meal Planning for Busy Lives</h2>
            <p>
              Tired of guessing what’s for dinner? Meal Prep Pro helps you
              search recipes, save favorites, and auto-build your shopping list
              — all in one sleek, secure app. Built with React, Node.js, and
              MongoDB, it’s designed for food lovers who crave simplicity. Tech
              meets taste. Let’s cook smarter.
            </p>
            <a
              href="https://meal-prep-pro-fe.onrender.com"
              className="featured-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="featured-teaser">
          <img src="/FEATURED-BLOG.jpg" alt="Project Thumbnail" />
          <div className="featured-text">
            <h2>📝 Featured Blog: Self-Taught with Purpose</h2>
            <p>
              From hospital hallways to the front lines of digital defense, I
              transitioned from healthcare to cybersecurity with zero tech
              background — just grit, purpose, and a hunger to protect. This
              post unpacks how I went from learning IT basics to earning
              multiple certs, diving into code, and securing real-world systems.
              If you're navigating your own self-taught journey or curious how
              coding and cyber connect, this one's for you.
            </p>
            <Link
              to={`/blog/breaking-into-cybersecurity-a-self-taught-path`}
              className="featured-link"
            >
              View Post
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedContent;
