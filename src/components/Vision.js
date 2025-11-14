// Vision Component
// This section communicates your core belief: crypto can make the world a better place
// It should be inspiring and explain why you're passionate about this space

import React from 'react';
import './Vision.css';

function Vision() {
  return (
    <section id="vision" className="vision">
      <div className="section-container">
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">My Vision</h2>
          <div className="section-divider"></div>
        </div>

        {/* Main vision content */}
        <div className="vision-content">
          <div className="vision-main">
            <h3 className="vision-heading">
              Crypto Can Make the World a Better Place
            </h3>
            <p className="vision-text">
              For over 8 years, I've witnessed the transformative power of blockchain technology. 
              What started as a curiosity has become a mission: to leverage crypto and Web3 innovations 
              to create positive change in the world.
            </p>
            <p className="vision-text">
              Through decentralized systems, we can build more transparent, equitable, and accessible 
              solutions. From GameFI that rewards players fairly, to DAOs that empower communities, 
              to DeFi that provides financial freedom—the possibilities are endless.
            </p>
          </div>

          {/* Vision pillars - key beliefs */}
          <div className="vision-pillars">
            <div className="pillar">
              <div className="pillar-icon">🌍</div>
              <h4 className="pillar-title">Global Impact</h4>
              <p className="pillar-text">
                Building solutions that transcend borders and empower people worldwide
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">⚡</div>
              <h4 className="pillar-title">Innovation</h4>
              <p className="pillar-text">
                Pushing boundaries with cutting-edge Web3 technologies and concepts
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🤝</div>
              <h4 className="pillar-title">Community</h4>
              <p className="pillar-text">
                Fostering collaborative ecosystems where everyone can participate and benefit
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🔐</div>
              <h4 className="pillar-title">Transparency</h4>
              <p className="pillar-text">
                Creating trust through open, verifiable, and decentralized systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;

