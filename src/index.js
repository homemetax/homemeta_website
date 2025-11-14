// Entry point - Only loads React for interactive enhancements
// The base HTML in public/index.html works without JavaScript

// Import React and enhancement components
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsTabs from './enhancements/ProjectsTabs';
import ContactForm from './enhancements/ContactForm';
import SocialButtons from './components/SocialButtons';
import NavigationArrows from './components/NavigationArrows';

// Error Boundary Component to catch and display errors properly
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: '#ff6b6b', backgroundColor: '#ffe0e0', borderRadius: '4px', margin: '20px 0' }}>
          <h3>Something went wrong</h3>
          <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
          <details style={{ marginTop: '10px' }}>
            <summary>Error Details</summary>
            <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
              {this.state.error?.stack || String(this.state.error)}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Only enhance interactive parts if JavaScript is enabled
// This ensures the site works without JavaScript

// Wait for DOM to be fully loaded before mounting React components
function mountReactComponents() {
  // Mount Header with overlay navigation
  const headerRoot = document.getElementById('header-root');
  if (headerRoot) {
    try {
      const root = createRoot(headerRoot);
      root.render(
        <ErrorBoundary>
          <React.StrictMode>
            <Header />
          </React.StrictMode>
        </ErrorBoundary>
      );
    } catch (error) {
      console.error('Error mounting Header:', error);
    }
  }

  // Mount Social Buttons (floating on the right side)
  const socialButtonsRoot = document.getElementById('social-buttons-root');
  if (socialButtonsRoot) {
    try {
      const root = createRoot(socialButtonsRoot);
      root.render(
        <ErrorBoundary>
          <React.StrictMode>
            <SocialButtons />
          </React.StrictMode>
        </ErrorBoundary>
      );
    } catch (error) {
      console.error('Error mounting SocialButtons:', error);
    }
  }

  // Mount Navigation Arrows (floating on the left side)
  const navigationArrowsRoot = document.getElementById('navigation-arrows-root');
  if (navigationArrowsRoot) {
    try {
      const root = createRoot(navigationArrowsRoot);
      root.render(
        <ErrorBoundary>
          <React.StrictMode>
            <NavigationArrows />
          </React.StrictMode>
        </ErrorBoundary>
      );
    } catch (error) {
      console.error('Error mounting NavigationArrows:', error);
    }
  }

  // Mount Hero component with all 4 design options
  const heroRoot = document.getElementById('hero-root');
  if (heroRoot) {
    try {
      const root = createRoot(heroRoot);
      root.render(
        <ErrorBoundary>
          <React.StrictMode>
            <Hero />
          </React.StrictMode>
        </ErrorBoundary>
      );
    } catch (error) {
      console.error('Error mounting Hero:', error);
      const errorMsg = error?.message || error?.toString() || 'Unknown error';
      heroRoot.innerHTML = `<div style="padding: 20px; color: #ff6b6b; background: #ffe0e0; border-radius: 4px;">Error loading hero: ${errorMsg}</div>`;
    }
  }

  // Enhance Projects section with tabs
  const projectsRoot = document.getElementById('projects-tabs-root');
  if (projectsRoot) {
    try {
      const root = createRoot(projectsRoot);
      root.render(
        <ErrorBoundary>
          <React.StrictMode>
            <ProjectsTabs />
          </React.StrictMode>
        </ErrorBoundary>
      );
    } catch (error) {
      console.error('Error mounting ProjectsTabs:', error);
      const errorMsg = error?.message || error?.toString() || 'Unknown error';
      projectsRoot.innerHTML = `<div style="padding: 20px; color: #ff6b6b; background: #ffe0e0; border-radius: 4px;">Error loading projects: ${errorMsg}</div>`;
    }
  }

  // Enhance Contact section with form
  const contactFormRoot = document.getElementById('contact-form-root');
  if (contactFormRoot) {
    try {
      const root = createRoot(contactFormRoot);
      root.render(
        <ErrorBoundary>
          <React.StrictMode>
            <ContactForm />
          </React.StrictMode>
        </ErrorBoundary>
      );
    } catch (error) {
      console.error('Error mounting ContactForm:', error);
      const errorMsg = error?.message || error?.toString() || 'Unknown error';
      contactFormRoot.innerHTML = `<div style="padding: 20px; color: #ff6b6b; background: #ffe0e0; border-radius: 4px;">Error loading contact form: ${errorMsg}</div>`;
    }
  }
}

// Mount when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountReactComponents);
} else {
  // DOM is already ready
  mountReactComponents();
}
