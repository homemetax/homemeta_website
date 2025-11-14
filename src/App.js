// Main App Component
// This is the root component that contains all sections of our website
// Think of it as the container that holds all the different pages/sections

import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Newsletter from './components/Newsletter';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header component - stays at the top, includes navigation */}
      <Header />
      
      {/* Hero section - first thing visitors see, your introduction */}
      <Hero />
      
      {/* Vision section - explains your mission about crypto making the world better */}
      <Vision />
      
      {/* Newsletter section - subscribe to Substack newsletter */}
      <Newsletter />
      
      {/* Expertise section - showcases your skills and experience */}
      <Expertise />
      
      {/* Projects section - highlights your work and achievements */}
      <Projects />
      
      {/* Contact section - social media links and ways to connect */}
      <Contact />
      
      {/* Footer - additional links and copyright */}
      <Footer />
    </div>
  );
}

export default App;

