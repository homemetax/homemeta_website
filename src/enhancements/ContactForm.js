// Contact Form Component - React enhancement for form handling
// This handles form state and submission

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Work Opportunity: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // IMPORTANT: Update this email address with your actual email
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    
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
  };

  if (submitted) {
    return (
      <div className="contact-form-wrapper">
        <div className="form-success">
          <div className="success-icon">✓</div>
          <p>Thank you! Your message has been sent.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <h3 className="contact-form-title">Work Opportunities & Consulting</h3>
      <p className="contact-form-subtitle">
        Interested in working together? Fill out the form below and I'll get back to you.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email *</label>
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
        <div className="form-group">
          <label htmlFor="company" className="form-label">Company / Project</label>
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
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject *</label>
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
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message *</label>
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
        <button type="submit" className="form-submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;

