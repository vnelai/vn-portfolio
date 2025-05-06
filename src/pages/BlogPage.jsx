import React, { useEffect, useState } from 'react';
import Blog from '../components/blog-components/blog/Blog';
import HeroBlog from '../components/blog-components/hero-blog/HeroBlog';
import FeaturedBlogs from '../components/blog-components/featured-blogs/FeaturedBlogs';
import Topics from '../components/blog-components/topics/Topics';
import { supabase } from '../lib/supabaseClient';

function BlogPage() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('*');
  
      if (error) {
        console.error('Error fetching articles:', error);
      } else {
        setArticles(data);
      }
    };
  
    fetchArticles();
  }, []);
  
   // Filter articles based on the selected topic
   const filteredArticles = selectedTopic
   ? articles.filter((article) => article.topics.includes(selectedTopic))
   : articles;


  return (
    <div>
      {/* Hero section for the blog */}
      <HeroBlog />
      {/* Featured posts section */}
      <FeaturedBlogs onViewAll={() => setSelectedTopic(null)} />
      {/* Topic section displaying all topics */}
      <Topics onTopicSelect={setSelectedTopic} />
      {/* Passing the articles as a prop to the Blog component */}
      <Blog articles={filteredArticles} /> 
    </div>
  );
}

export default BlogPage;
