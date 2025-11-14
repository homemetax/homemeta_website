// Footer Component
// Final section with copyright and additional links

import React from 'react';
import './Footer.css';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and branding */}
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">
              Building a better world through crypto
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="#home" className="footer-link">Home</a>
            <a href="#vision" className="footer-link">Vision</a>
            <a href="#expertise" className="footer-link">Expertise</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Additional info */}
          <div className="footer-info">
            <h4 className="footer-heading">Connect</h4>
            <a 
              href="https://twitter.com/homeMetaX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
            <a 
              href="https://homemetax.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Website
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} HomeMetaX. All rights reserved.
          </p>
          <p className="footer-note">
            Made with ❤️ for the Web3 community • <span style={{color: '#8DFFA4', fontWeight: '600'}}>v2.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

