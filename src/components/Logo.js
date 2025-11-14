// Logo Component
// This component renders your pixel art logo using the Doginal-dog-9723.svg file

import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="logo-wrapper">
      {/* Using the Doginal-dog-9723.svg file from public folder */}
      <img
        src="/assets/Doginal-dog-9723.svg"
        alt="HomeMetaX Logo"
        className="logo-svg"
      />
      
      {/* Text next to logo */}
      <span className="logo-text">HomeMetaX</span>
    </div>
  );
}

export default Logo;

