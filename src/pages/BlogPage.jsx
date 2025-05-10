import React, { useEffect, useState } from 'react';
import HeroBlog from '../components/blog-components/hero-blog/HeroBlog';
import FeaturedBlogs from '../components/blog-components/featured-blogs/FeaturedBlogs';
import Topics from '../components/blog-components/topics/Topics';
import { supabase } from '../lib/supabaseClient';

function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, slug, excerpt, image, date, topics') // optimize fields
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <HeroBlog />
      <FeaturedBlogs articles={articles} onViewAll={() => {}} />
      <Topics />
    </div>
  );
}

export default BlogPage;