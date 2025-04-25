import React, { useState } from 'react';
import Blog from '../components/blog-components/blog/Blog';
import HeroBlog from '../components/blog-components/hero-blog/HeroBlog';
import FeaturedBlogs from '../components/blog-components/featured-blogs/FeaturedBlogs';
import Topics from '../components/blog-components/topics/Topics';
import articles from '../data/articles'; 

function BlogPage() {
  const [selectedTopic, setSelectedTopic] = useState(null);

   // Filter articles based on the selected topic
   const filteredArticles = selectedTopic
   ? articles.filter((article) => article.topics.includes(selectedTopic))
   : articles;

   console.log(selectedTopic);
  return (
    <div className="blog-page">
      {/* Hero section for the blog */}
      <HeroBlog />
      {/* Featured posts section */}
      <FeaturedBlogs />
      {/* Topic section displaying all topics */}
      <Topics onTopicSelect={setSelectedTopic} />
      {/* Passing the articles as a prop to the Blog component */}
      <Blog articles={filteredArticles} /> 
    </div>
  );
}

export default BlogPage;
