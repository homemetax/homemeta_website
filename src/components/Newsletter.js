// Newsletter Component
// Promotes subscription to your Substack newsletter
// This component can be placed in the Hero section or as a separate section

import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Newsletter icon/emoji */}
          <div className="newsletter-icon">📬</div>
          
          {/* Heading */}
          <h3 className="newsletter-heading">Stay Updated</h3>
          
          {/* Description */}
          <p className="newsletter-description">
            Get insights on Web3, crypto trends, and my journey as a crypto entrepreneur. 
            Subscribe to my newsletter for the latest updates and thoughts.
          </p>
          
          {/* CTA Button - links to your Substack */}
          <a 
            href="https://homemetax.substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="newsletter-button"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

