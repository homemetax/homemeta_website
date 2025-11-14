// Projects Component
// Highlights your key projects and achievements
// Now with tabs to separate Present and Past works

import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  // useState hook to manage which tab is active
  // 'present' is the default active tab
  const [activeTab, setActiveTab] = useState('present');

  // Array of present/current projects
  const presentProjects = [
    {
      name: 'Kennel DAO',
      description: 'Doginal dogs community initiative - Building a decentralized autonomous organization around the Doginal Dogs ecosystem. Co-founder focusing on technology and business development.',
      role: 'Co-founder',
      tags: ['DAO', 'Community', 'Doginals', 'Tech', 'BD'],
      link: 'https://twitter.com/kennelDAO'
    },
    {
      name: 'MonkeyPOX ($POX)',
      description: 'Telegram administrator for the MonkeyPOX token community, managing communications and community engagement.',
      role: 'Telegram Admin',
      tags: ['Token', 'Community', 'Telegram'],
      link: null // Add link if available
    },
    {
      name: 'Solciety Solana',
      description: 'Contributing to moderation and community support for Solana ecosystem projects. Previously handled business development.',
      role: 'Moderator',
      tags: ['Solana', 'Moderation', 'Community'],
      link: 'https://twitter.com/solcietysolana'
    },
    {
      name: 'MonkeDAO',
      description: 'Active community member contributing to the MonkeDAO ecosystem and community initiatives.',
      role: 'Community Member',
      tags: ['DAO', 'Community', 'Web3'],
      link: 'https://monkedao.io'
    },
    {
      name: 'Crypto Spaces Network',
      description: 'Community member supporting the Crypto Spaces Network community and initiatives.',
      role: 'Community Member',
      tags: ['Community', 'Networking', 'Web3'],
      link: 'https://twitter.com/CryptoSpacesNet'
    },
    {
      name: 'Non Fungible Gaming',
      description: 'Web3 gaming guild co-founder responsible for community management, research & development, and logistics. NFG is a leading gaming guild that bridges traditional gaming with blockchain technology, enabling players to earn through play-to-earn mechanics and NFT ownership.',
      role: 'Co-founder',
      tags: ['Gaming', 'Guild', 'Web3', 'GameFI', 'NFT'],
      link: null // Add link if available
    }
  ];

  // Array of past projects
  const pastProjects = [
    {
      name: 'Pop Art Cats',
      description: 'NFT collection by Matt Fresco. Managed community engagement, growth, and communications for the collection.',
      role: 'Community Manager',
      tags: ['NFT', 'Art', 'Community'],
      link: null // Add link if available
    },
    {
      name: 'Kollector',
      description: 'Provided strategic advising and community leadership for Kollector, an Italian Art NFT collector and platform.',
      role: 'Advisor & Community Lead',
      tags: ['NFT', 'Art', 'Advisory', 'Italy'],
      link: null // Add link if available
    },
    {
      name: 'Les Collectionneurs NFT',
      description: 'The first and biggest crypto art collective back in 2020 and 2021. Responsible for managing the Gaming department, exploring the intersection of art, NFTs, and gaming.',
      role: 'Gaming Department Lead',
      tags: ['NFT', 'Art', 'Gaming', 'Collective'],
      link: null // Add link if available
    }
  ];

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Determine which projects array to display based on active tab
  const projectsToShow = activeTab === 'present' ? presentProjects : pastProjects;

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects & Communities</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Current and past projects showcasing my journey in Web3
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="projects-tabs">
          <button
            className={`tab-button ${activeTab === 'present' ? 'active' : ''}`}
            onClick={() => handleTabClick('present')}
            aria-label="View present projects"
          >
            Present Works
          </button>
          <button
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => handleTabClick('past')}
            aria-label="View past projects"
          >
            Past Works
          </button>
        </div>

        {/* Projects Grid - shows different projects based on active tab */}
        <div className="projects-grid">
          {projectsToShow.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-role">{project.role}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
