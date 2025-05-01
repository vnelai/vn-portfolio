import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page whenever the route changes
  }, [location]);

  return null;  // No visible component rendered
};

export default ScrollToTop;
