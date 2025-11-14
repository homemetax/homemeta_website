// NavigationArrows Component
// Floating navigation arrows that allow scrolling up/down through sections

import React, { useState, useEffect } from 'react';
import './NavigationArrows.css';

function NavigationArrows() {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  // Define all sections in order
  const sections = [
    'hero-root',      // Hero section
    'vision',         // Vision section
    'newsletter',     // Newsletter section (no id, use class)
    'expertise',      // Expertise section
    'projects',       // Projects section
    'contact'         // Contact section
  ];

  // Get the current section index based on scroll position
  const getCurrentSectionIndex = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      let element;
      
      // Special handling for newsletter which uses class instead of id
      if (sections[i] === 'newsletter') {
        element = document.querySelector('.newsletter');
      } else {
        element = document.getElementById(sections[i]);
      }
      
      if (element && element.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  };

  // Update arrow visibility based on scroll position
  const updateArrowVisibility = () => {
    const currentIndex = getCurrentSectionIndex();
    const isAtTop = window.scrollY < 100;
    
    // Check if we're at the footer
    const footer = document.querySelector('.footer');
    const footerTop = footer ? footer.offsetTop : Infinity;
    const isAtFooter = window.scrollY + window.innerHeight >= footerTop + 100;
    
    // Show up arrow if not at the very top
    setShowUpArrow(!isAtTop);
    
    // Show down arrow if not at footer
    setShowDownArrow(!isAtFooter);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to next section
  const scrollToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    
    // If at contact section, scroll to footer
    if (currentIndex >= sections.length - 1) {
      const footer = document.querySelector('.footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Scroll to next section
    const nextIndex = currentIndex + 1;
    let nextElement;
    
    // Special handling for newsletter
    if (sections[nextIndex] === 'newsletter') {
      nextElement = document.querySelector('.newsletter');
    } else {
      nextElement = document.getElementById(sections[nextIndex]);
    }
    
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set up scroll listener
  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('scroll', updateArrowVisibility);
    
    // Update on window resize as well
    window.addEventListener('resize', updateArrowVisibility);
    
    return () => {
      window.removeEventListener('scroll', updateArrowVisibility);
      window.removeEventListener('resize', updateArrowVisibility);
    };
  }, []);

  return (
    <div className="navigation-arrows-container">
      {/* Up Arrow - Scroll to top */}
      <button
        className={`nav-arrow nav-arrow-up ${showUpArrow ? 'visible' : 'hidden'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      {/* Down Arrow - Scroll to next section */}
      <button
        className={`nav-arrow nav-arrow-down ${showDownArrow ? 'visible' : 'hidden'}`}
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  );
}

export default NavigationArrows;

