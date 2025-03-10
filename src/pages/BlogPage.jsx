import React from 'react';
import Blog from '../components/blog/Blog';

const articles = [
  { id: 1, title: 'How to Build a Secure Web App', excerpt: 'In this post, we will explore...', date: 'March 10, 2025', image: 'link-to-image.jpg' },
  { id: 2, title: 'Exploring Machine Learning in JavaScript', excerpt: 'This article covers how to integrate...', date: 'March 5, 2025', image: 'link-to-image.jpg' },
  { id: 3, title: 'The Future of Cloud Computing', excerpt: 'In this post, we dive deep into...', date: 'February 28, 2025', image: 'link-to-image.jpg' },
  // Add more articles as needed
];

function BlogPage() {
  return (
    <div className="blog-page">
      <h1>My Tech Blog</h1>
      <h2 style={{ marginTop: '5rem',  textAlign: 'center'  }}>Blog posts are coming soon. Stay tuned!</h2>
      {/* Passing the articles as a prop to the Blog component */}
      {/* <Blog articles={articles}/>  */}
    </div>
  );
};

export default BlogPage;