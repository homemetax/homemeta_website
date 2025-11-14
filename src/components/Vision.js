// Vision Component
// This section communicates your core belief: crypto can make the world a better place
// It should be inspiring and explain why you're passionate about this space

import React from 'react';
import './Vision.css';
import profileImage from '../assets/profile-1.jpg';

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
          <div className="vision-main-wrapper">
            <img 
              src={profileImage}
              alt="Profile" 
              className="vision-profile-image"
            />
            <div className="vision-main">
              <h3 className="vision-heading">
                Crypto Will Make the World a Better Place
              </h3>
              <p className="vision-text">
                For 8 years, I've been exploring, investing, and researching the blockchain frontier. 
                My journey centers on building DAOs and nurturing communities, with web3gaming as my primary 
                focus. To me gaming is the perfect way to find courageous young entrepreneurs looking to change their financial future.
              </p>
              <p className="vision-text">
                Beyond web3gaming, I engage with everything from RWA projects, degen trends, and the full spectrum of 
                blockchain innovation. Recently, I've discovered a new passion for business development 
                and connecting people who have aligned visions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;

