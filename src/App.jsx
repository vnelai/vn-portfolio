import React, { useState, useEffect } from "react"; //Import React and React hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Pages and global components
import Header from "./components/header/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/aboutMe/AboutMe";
import BlogPage from "./pages/BlogPage";
import Article from "././components/article/Article"; // Full Article Component
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// Import Styling
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  // useState to track changes in mode-toggle
  const [isDarkMode, setDarkMode] = useState(false); // I'm starting with lights on, because it's a better feeling turning lights off instead of turning lights on for users lol

  // Effect to toggle the class on the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Function to change the state of mode-toggle
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} />
      <Router>
        <div className="main-content">
          <Routes>
            {/* Set up Routes for each page */}
            <Route path="/" element={<Home />} />
            <Route
              path="/about-me"
              element={<AboutMe isDarkMode={isDarkMode} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<Article />} />{" "}
            {/* Dynamic routing for full article */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
