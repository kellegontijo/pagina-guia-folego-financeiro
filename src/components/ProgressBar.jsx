import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Added state

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / totalHeight) * 100;
      setScrollProgress(progress);

      if (progress > 10) { // Show after 10% scroll
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && ( // Conditionally render
      <div className="fixed top-0 left-0 w-full h-2 bg-brand-dark-blue-tertiary z-50">
        <div
          className="h-full bg-brand-green transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    )
  );
};

export default ProgressBar;