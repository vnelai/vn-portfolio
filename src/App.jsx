import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter import
import Header from "./components/header/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import TopicPage from "./pages/topic-page/TopicPage";
import Article from "./pages/article-page/Article";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import NotFound from "./components/not-found/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    // Force repaint for CSS variables to fully update
    document.body.style.display = "none";
    document.body.offsetHeight;
    document.body.style.display = "";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/topic/:topicSlug" element={<TopicPage />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
