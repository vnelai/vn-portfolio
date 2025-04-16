import React from 'react';
import HeroSection from '../components/home-page-components/hero-section/HeroSection';
import FeaturedContent from '../components/home-page-components/featured-content/FeaturedContent'; 

function Home() {
  return (
    <div>
        <HeroSection />
        <FeaturedContent />
    </div>
  );
}

export default Home;