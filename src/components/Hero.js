// Hero Component
// Original slider implementation converted to React

import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const autoSlideTimeoutRef = useRef(null);

  const numOfSlides = 2; // 3 slides (0-2)
  const animTime = 500;
  const autoSlideDelay = 6000;

  const slides = [
    {
      bgColor: 'rgb(233, 156, 126)', // Orange/Peach
      title: 'Project name 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.',
      link: 'Project link'
    },
    {
      bgColor: 'rgb(173, 197, 205)', // Light Blue
      title: 'Project name 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.',
      link: 'Project link'
    },
    {
      bgColor: 'rgb(225, 204, 174)', // Beige/Tan
      title: 'Project name 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.',
      link: 'Project link'
    }
  ];

  const clearAutoSlide = () => {
    if (autoSlideTimeoutRef.current) {
      clearTimeout(autoSlideTimeoutRef.current);
      autoSlideTimeoutRef.current = null;
    }
  };

  const changeSlides = (instant = false) => {
    if (!instant && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, animTime);
    }

    clearAutoSlide();
    autoSlideTimeoutRef.current = setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % (numOfSlides + 1));
      changeSlides();
    }, autoSlideDelay);
  };

  const navigateLeft = () => {
    if (isAnimating || currentSlide === 0) return;
    setCurrentSlide(prev => prev - 1);
    changeSlides();
  };

  const navigateRight = () => {
    if (isAnimating || currentSlide === numOfSlides) return;
    setCurrentSlide(prev => prev + 1);
    changeSlides();
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setCurrentSlide(index);
    changeSlides();
  };

  // Auto-slide
  useEffect(() => {
    changeSlides();
    return () => clearAutoSlide();
  }, []);

  // Click handler for slider - click left side to go left, right side to go right
  const handleSliderClick = (e) => {
    if (isAnimating) return;
    clearAutoSlide();
    
    const slider = sliderRef.current;
    if (!slider) return;
    
    const rect = slider.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const sliderWidth = rect.width;
    const middle = sliderWidth / 2;
    
    if (clickX < middle) {
      // Clicked left side - go to previous slide
      if (currentSlide > 0) {
        navigateLeft();
      }
    } else {
      // Clicked right side - go to next slide
      if (currentSlide < numOfSlides) {
        navigateRight();
      }
    }
  };

  // Scroll handler to switch slides
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThrottle = 500; // Minimum time between scroll-triggered slide changes (ms)

    const handleWheel = (e) => {
      // Check if we're scrolling within the slider container
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const isInContainer = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      
      // Only handle scroll if we're in the container area
      if (!isInContainer) return;
      
      // Check if container is at the top of viewport (or very close)
      // This ensures we only handle slider scroll when the container is visible at the top
      const isAtTop = rect.top >= 0 && rect.top < 100; // Allow some tolerance
      
      if (!isAtTop) return;
      
      // Determine scroll direction early to check if we can navigate
      const deltaY = e.deltaY;
      const canNavigateDown = currentSlide < numOfSlides && deltaY > 0;
      const canNavigateUp = currentSlide > 0 && deltaY < 0;
      const canNavigate = canNavigateDown || canNavigateUp;
      
      // If we can navigate, always prevent page scroll (even if throttled)
      if (canNavigate) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      // If animating or throttled, prevent default but don't navigate
      if (isAnimating) return;
      
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollThrottle) {
        return; // Already prevented default above
      }
      
      // Actually perform navigation
      if (deltaY > 0) {
        // Scrolling down
        if (currentSlide < numOfSlides) {
          navigateRight();
          lastScrollTime = currentTime;
        }
        // If on last slide, allow normal page scrolling (already didn't prevent default)
      } else if (deltaY < 0) {
        // Scrolling up
        if (currentSlide > 0) {
          navigateLeft();
          lastScrollTime = currentTime;
        }
        // If on first slide, allow normal page scrolling (already didn't prevent default)
      }
    };

    // Listen on window to catch all scroll events, but only act if in container
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, isAnimating, numOfSlides, navigateLeft, navigateRight]);

  const sliderTransform = `translate3d(${-currentSlide * 100}%, 0, 0)`;

  return (
    <div className="slider-container" ref={containerRef}>
      {/* Static Left Triangle with Text - Always visible */}
      <div className="static-triangle">
        <svg 
          className="static-triangle-overlay" 
          viewBox="0 0 720 405" 
          preserveAspectRatio="xMaxYMax slice"
        >
          <path 
            className="static-triangle-path" 
            d="M0,0 150,0 500,405 0,405"
            fill="rgba(33, 33, 33, 0.8)"
          />
        </svg>
        <div className="static-triangle-content">
          <p className="hero-tagline">
            8 Years • Blockchain Explorer • Community Builder
          </p>
          <p className="hero-description-main">
            Building a better world through blockchain technology.
          </p>
          <div className="hero-description-text">
            <p>
              For 8 years, I've been exploring, investing, and researching the 
              blockchain frontier. My journey centers on building DAOs and nurturing 
              communities, with gaming as my primary focus. Recognizing it as the 
              perfect entry point for young and courageous entrepreneurs.
            </p>
            <p>
              Beyond gaming, I engage with RWA projects, degen trends, and the full 
              spectrum of blockchain innovation. Recently, I've discovered a new passion for 
              business development and connecting people who share a vision for Web3's future.
            </p>
          </div>
          <div className="hero-cta">
            <a href="#vision" className="btn btn-primary">Explore My Vision</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>

      <div 
        className={`slider-control left ${currentSlide === 0 ? 'inactive' : ''}`}
        onClick={navigateLeft}
      ></div>
      <div 
        className={`slider-control right ${currentSlide === numOfSlides ? 'inactive' : ''}`}
        onClick={navigateRight}
      ></div>

      <ul className="slider-pagi">
        {slides.map((_, index) => (
          <li
            key={index}
            className={`slider-pagi__elem slider-pagi__elem-${index} ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </ul>

      <div 
        className={`slider ${isAnimating ? 'animating' : ''}`}
        ref={sliderRef}
        style={{ transform: sliderTransform }}
        onClick={handleSliderClick}
      >
        {slides.map((slide, index) => {
          return (
            <div 
              key={index}
              className={`slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundColor: slide.bgColor
              }}
            >
              <div className="slide__content">
                {/* Removed overlay and text - now static on left side */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
