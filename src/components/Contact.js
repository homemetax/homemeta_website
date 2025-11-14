// Contact Component
// Social media links and ways to get in touch

import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
  // Array of social media links - easy to add or modify
  const socialLinks = [
    {
      name: 'Twitter',
      handle: '@homeMetaX',
      url: 'https://twitter.com/homeMetaX',
      icon: '𝕏', // Twitter/X icon
      color: '#A8E6CF' // Mint green
    },
    {
      name: 'Instagram',
      handle: '@homeMetaX',
      url: 'https://instagram.com/homeMetaX', // Update with your actual Instagram handle
      icon: '📷',
      color: '#A8E6CF'
    },
    {
      name: 'LinkedIn',
      handle: 'LinkedIn Profile',
      url: 'https://linkedin.com', // Update with your actual LinkedIn
      icon: 'in',
      color: '#A8E6CF'
    },
    {
      name: 'Telegram',
      handle: 'Home Journal',
      url: 'https://t.me', // Update with your actual Telegram
      icon: '✈️',
      color: '#A8E6CF'
    },
    {
      name: 'Website',
      handle: 'HomeMetaX',
      url: 'https://homemetax.com', // Update with your actual website URL
      icon: '🌐',
      color: '#A8E6CF'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Always open to discussing new projects, partnerships, or opportunities
          </p>
        </div>

        <div className="contact-content">
          {/* Main message */}
          <div className="contact-message">
            <h3 className="contact-heading">
              Building the Future of Web3 Together
            </h3>
            <p className="contact-text">
              Whether you're launching a new project, looking for strategic guidance, 
              or want to collaborate on something exciting, I'd love to hear from you.
            </p>
            <p className="contact-text">
              Let's explore how crypto and blockchain can make a positive impact together.
            </p>
          </div>

          {/* Contact Form for Work Opportunities */}
          <ContactForm />

          {/* Social links grid */}
          <div className="social-section">
            <h4 className="social-section-title">Connect on Social Media</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon">{social.icon}</div>
                  <div className="social-info">
                    <div className="social-name">{social.name}</div>
                    <div className="social-handle">{social.handle}</div>
                  </div>
                  <div className="social-arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

