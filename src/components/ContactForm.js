// Contact Form Component
// Handles work opportunity and consulting inquiries
// Uses React state to manage form inputs

import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  // useState hooks to manage form input values
  // Each input field has its own state variable
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  // State to track if form was submitted
  const [submitted, setSubmitted] = useState(false);

  // Function to handle input changes
  // This is called whenever user types in any input field
  const handleChange = (e) => {
    // e.target.name is the name attribute of the input
    // e.target.value is what the user typed
    // We update the state with the new value
    setFormData({
      ...formData, // Spread operator - keeps existing values
      [e.target.name]: e.target.value // Updates only the changed field
    });
  };

  // State to track loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh (default form behavior)
    setLoading(true);
    setError('');
    
    try {
      // Option 1: Formspree (Recommended - Easy setup)
      // Step 1: Go to https://formspree.io and create a free account
      // Step 2: Create a new form and get your form endpoint (e.g., https://formspree.io/f/YOUR_FORM_ID)
      // Step 3: Replace 'YOUR_FORMSPREE_ENDPOINT' below with your actual Formspree endpoint
      
      const response = await fetch('https://formspree.io/f/mgvrvklq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: `Work Opportunity: ${formData.subject}` // Email subject line
        })
      });

      if (response.ok) {
        // Success - form submitted
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
          });
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h3 className="contact-form-title">Work Opportunities & Consulting</h3>
      <p className="contact-form-subtitle">
        Interested in working together? Fill out the form below and I'll get back to you.
      </p>

      {submitted ? (
        // Success message shown after form submission
        <div className="form-success">
          <div className="success-icon">✓</div>
          <p>Thank you! Your message has been sent. I'll get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required // HTML5 validation - field must be filled
              placeholder="Your name"
            />
          </div>

          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          {/* Company input */}
          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Company / Project
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company or project name"
            />
          </div>

          {/* Subject input */}
          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              className="form-input"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a topic...</option>
              <option value="Web3 Consulting">Web3 Consulting</option>
              <option value="GameFI Development">GameFI Development</option>
              <option value="Business Development">Business Development</option>
              <option value="Community Building">Community Building</option>
              <option value="Partnership Opportunity">Partnership Opportunity</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message textarea */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
          </div>

          {/* Error message */}
          {error && (
            <div className="form-error" style={{ color: '#ff6b6b', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#ffe0e0', borderRadius: '4px' }}>
              {error}
            </div>
          )}

          {/* Submit button */}
          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;

