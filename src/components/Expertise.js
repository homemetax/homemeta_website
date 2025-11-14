// Expertise Component
// Showcases your skills, experience, and what makes you a valuable crypto entrepreneur
// Based on your Bento profile: Web3 consultant, GameFI specialist, BD, etc.

import React from 'react';
import './Expertise.css';

function Expertise() {
  // Array of expertise areas - easy to add or modify
  const expertiseAreas = [
    {
      title: 'Web3 Product Consulting',
      description: 'Helping projects navigate the Web3 landscape, from concept to launch. Strategic guidance for tokenomics, community building, and product-market fit.',
      icon: '🚀',
      years: '8+ Years'
    },
    {
      title: 'GameFI Specialist',
      description: 'Deep expertise in GameFI mechanics, play-to-earn models, and blockchain gaming ecosystems. Understanding what makes games engaging and sustainable.',
      icon: '🎮',
      years: 'Expert'
    },
    {
      title: 'Business Development',
      description: 'Building strategic partnerships and growing communities. Currently BD at @solcietysolana and @doginaldogsx, connecting projects with opportunities.',
      icon: '🤝',
      years: 'Active'
    },
    {
      title: 'Community Building',
      description: 'Fostering engaged communities around crypto projects. Experience with DAOs, NFT communities, and decentralized governance structures.',
      icon: '👥',
      years: '8+ Years'
    },
    {
      title: 'Crypto Strategy',
      description: 'Long-term vision and strategic planning for crypto projects. Understanding market dynamics, trends, and how to position projects for success.',
      icon: '📊',
      years: '8+ Years'
    },
    {
      title: 'Project Management',
      description: 'Leading initiatives from ideation to execution. Managing teams, timelines, and deliverables in the fast-paced crypto space.',
      icon: '⚙️',
      years: '8+ Years'
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">My Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            8 years of hands-on experience in the crypto and Web3 space
          </p>
        </div>

        {/* Expertise grid */}
        <div className="expertise-grid">
          {/* Map through expertise areas and create a card for each */}
          {/* This is a common React pattern: using .map() to render lists */}
          {expertiseAreas.map((area, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-header">
                <div className="expertise-icon">{area.icon}</div>
                <span className="expertise-years">{area.years}</span>
              </div>
              <h3 className="expertise-title">{area.title}</h3>
              <p className="expertise-description">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="expertise-stats">
          <div className="stat">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years in Crypto</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Consulted</div>
          </div>
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Communities Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;

