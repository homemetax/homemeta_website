// SocialButtons Component
// Floating social media buttons that stick to the viewport on the right side

import React from 'react';
import './SocialButtons.css';

function SocialButtons() {
  // Social media links
  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/homeMetaX',
      icon: '𝕏', // Using X character instead of Font Awesome icon
      className: 'twitter',
      isText: true
    },
    {
      name: 'Telegram Journal',
      url: 'https://t.me/home_journal',
      icon: 'fab fa-telegram-plane',
      className: 'telegram'
    },
    {
      name: 'Substack Newsletter',
      url: 'https://homemetax.substack.com/',
      icon: 'fas fa-envelope-open-text',
      className: 'substack'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/homeMetaX',
      icon: 'fab fa-instagram',
      className: 'instagram'
    },
    {
      name: 'Reddit',
      url: 'https://reddit.com/user/homeMetaX',
      icon: 'fab fa-reddit',
      className: 'reddit'
    }
  ];

  return (
    <div className="social-buttons-container">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-button ${social.className}`}
          aria-label={social.name}
        >
          {social.isText ? (
            <span className="social-icon-text">{social.icon}</span>
          ) : (
            <i className={social.icon}></i>
          )}
        </a>
      ))}
    </div>
  );
}

export default SocialButtons;

