import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - can be implemented later with backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="section5" className="contact-block width-restricted-block">
      <h2 className="heading" id="contact-us">
        Get in Touch
      </h2>
      <p className="contact-form-text">Need more info? Email now.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <a
              href="mailto:info@snowpathimmigration.com"
              className="email-link"
              aria-label="contact email"
            >
              <span className="email-icon"></span>
              <span>info@snowpathimmigration.com</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
