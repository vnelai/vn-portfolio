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
          <img
            src="https://ik.imagekit.io/vn8r5ege3sv/vn_blog_images/reviving-old-macbook-linux-wifi-fix/reviving-old-macbook-linux-wifi-fix-00.webp?updatedAt=1754699004315"
            alt="Older MacBook Pro running Ubuntu MATE after Wi-Fi fix"
          />
          <div className="featured-text">
            <h2>🚀 Featured Project: Reviving an Old MacBook with Linux</h2>
            <p>
              Took an end-of-life MacBook and turned it into a secure Linux
              laptop. Fought through a corrupted USB, Broadcom Wi-Fi driver
              headaches, and kernel compatibility. Then landed on Ubuntu MATE
              22.04.3 for a clean, stable fix. Great for learners, homelabs, and
              cyber pros who value practicality over hype.
            </p>
            <a
              href="https://github.com/vnelai/revive-old-mac-linux"
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
              background, just grit, purpose, and a hunger to protect. This post
              unpacks how I went from learning IT basics to earning multiple
              certs, diving into code, and securing real-world systems. If
              you're navigating your own self-taught journey or curious how
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
