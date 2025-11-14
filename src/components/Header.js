// Header Component
// Full-screen overlay navigation with animated menu items

import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from './Logo';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to smoothly scroll to a section and close overlay
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close overlay after clicking
    setOverlayActive(false);
  };

  // Toggle overlay navigation
  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo component */}
          <div className="logo-container">
            <Logo />
          </div>

          {/* Burger menu button */}
          <div className="open-overlay" onClick={toggleOverlay} title="NEW OVERLAY MENU">
            <span className={`bar-top ${overlayActive ? 'animate-top-bar' : 'animate-out-top-bar'}`}></span>
            <span className={`bar-middle ${overlayActive ? 'animate-middle-bar' : 'animate-out-middle-bar'}`}></span>
            <span className={`bar-bottom ${overlayActive ? 'animate-bottom-bar' : 'animate-out-bottom-bar'}`}></span>
          </div>
        </div>
      </header>

      {/* Full-screen overlay navigation */}
      <div className={`overlay-navigation ${overlayActive ? 'overlay-slide-down' : 'overlay-slide-up'}`}>
        <nav role="navigation">
          <ul>
            <li className={overlayActive ? 'slide-in-nav-item' : 'slide-in-nav-item-reverse'}>
              <a href="#vision" onClick={(e) => scrollToSection('vision', e)} data-content="My mission">
                Vision
              </a>
            </li>
            <li className={overlayActive ? 'slide-in-nav-item-delay-1' : 'slide-in-nav-item-delay-1-reverse'}>
              <a href="#expertise" onClick={(e) => scrollToSection('expertise', e)} data-content="I got skills">
                Expertise
              </a>
            </li>
            <li className={overlayActive ? 'slide-in-nav-item-delay-2' : 'slide-in-nav-item-delay-2-reverse'}>
              <a href="#projects" onClick={(e) => scrollToSection('projects', e)} data-content="Check my work">
                Projects
              </a>
            </li>
            <li className={overlayActive ? 'slide-in-nav-item-delay-3' : 'slide-in-nav-item-delay-3-reverse'}>
              <a href="#contact" onClick={(e) => scrollToSection('contact', e)} data-content="Let's connect">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

