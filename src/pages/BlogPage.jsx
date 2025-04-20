import React from 'react';
import Blog from '../components/blog-components/blog/Blog';
import HeroBlog from '../components/blog-components/hero-blog/HeroBlog';
import FeaturedBlogs from '../components/blog-components/featured-blogs/FeaturedBlogs';
import BlogSection from '../components/blog-components/blog-section/BlogSection';

const articles = [
  { id: 1, title: 'How to Build a Secure Web App', excerpt: 'In this post, we will explore...', date: 'March 10, 2025', image: 'security.jpg' },
  { id: 2, title: 'Exploring Machine Learning in JavaScript', excerpt: 'This article covers how to integrate...', date: 'March 5, 2025', image: 'ML.jpg' },
  { id: 3, title: 'The Future of Cloud Computing', excerpt: 'In this post, we dive deep into...', date: 'February 28, 2025', image: 'CLOUD.jpg' }
  // Add more articles as needed
];

function BlogPage() {
  return (
    <div className="blog-page">
      {/* Hero section for the blog */}
      <HeroBlog />
      {/* Featured posts section */}
      <FeaturedBlogs />
      {/* Blog section displaying all articles */}
      <BlogSection />
      {/* Passing the articles as a prop to the Blog component */}
      <Blog articles={articles}/> 
    </div>
  );
};

export default BlogPage;