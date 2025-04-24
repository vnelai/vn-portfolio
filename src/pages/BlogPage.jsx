import React from 'react';
import Blog from '../components/blog-components/blog/Blog';
import HeroBlog from '../components/blog-components/hero-blog/HeroBlog';
import FeaturedBlogs from '../components/blog-components/featured-blogs/FeaturedBlogs';
import Topics from '../components/blog-components/topics/Topics';
import articles from '../data/articles'; 

function BlogPage() {
  return (
    <div className="blog-page">
      {/* Hero section for the blog */}
      <HeroBlog />
      {/* Featured posts section */}
      <FeaturedBlogs />
      {/* Blog section displaying all articles */}
      <Topics/>
      {/* Passing the articles as a prop to the Blog component */}
      <Blog articles={articles} /> 
    </div>
  );
}

export default BlogPage;
