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

  const numOfSlides = 3; // 4 slides (0-3)
  const animTime = 500;
  const autoSlideDelay = 6000;

  const slides = [
    {
      bgColor: 'rgb(233, 156, 126)', // Orange/Peach
      title: 'Curiosity',
      desc: 'You don\'t grow if you don\'t learn and explore'
    },
    {
      bgColor: 'rgb(173, 197, 205)', // Light Blue
      title: 'Gaming - Accessibility',
      desc: 'Everyone should have a chance'
    },
    {
      bgColor: 'rgb(225, 204, 174)', // Beige/Tan
      title: 'Community',
      desc: 'Help each other'
    },
    {
      bgColor: 'rgb(198, 167, 207)', // Purple/Lavender
      title: 'Honesty - Transparency',
      desc: 'Building trust through openness'
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
            Building communities, DAOs, and connections in web3 since 2017.
          </p>
          <div className="hero-description-text">
            <p>
              Started with curiosity, stayed for the revolution. I build communities, 
              connect founders, and hunt for the next big play in crypto—from GameFi 
              to RWA, from degen moves to solid business dev.
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
                <div className="pillar-content">
                  <h2 className="pillar-title-large">{slide.title}</h2>
                  <p className="pillar-desc-large">{slide.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
