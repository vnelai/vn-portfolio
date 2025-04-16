import React from 'react';
import Blog from '../components/blog/Blog';
import HeroBlog from '../components/hero-blog/HeroBlog';
import FeaturedBlogs from '../components/featured-blogs/FeaturedBlogs';
import FreelanceBlogs from '../components/freelance-blogs/FreelanceBlogs';
import BlogSection from '../components/blog-section/BlogSection';

const articles = [
  { id: 1, title: 'How to Build a Secure Web App', excerpt: 'In this post, we will explore...', date: 'March 10, 2025', image: 'link-to-image.jpg' },
  { id: 2, title: 'Exploring Machine Learning in JavaScript', excerpt: 'This article covers how to integrate...', date: 'March 5, 2025', image: 'link-to-image.jpg' },
  { id: 3, title: 'The Future of Cloud Computing', excerpt: 'In this post, we dive deep into...', date: 'February 28, 2025', image: 'link-to-image.jpg' },
  // Add more articles as needed
];

function BlogPage() {
  return (
    <div className="blog-page">
      {/* Hero section for the blog */}
      <HeroBlog />
      {/* Featured posts section */}
      <FeaturedBlogs />
      {/* Freelance journey section */}
      <FreelanceBlogs />
      {/* Blog section displaying all articles */}
      <BlogSection />
      {/* Passing the articles as a prop to the Blog component */}
      <Blog articles={articles}/> 
    </div>
  );
};

export default BlogPage;