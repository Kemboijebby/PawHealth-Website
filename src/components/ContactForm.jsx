import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petType: 'dog',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', petType: 'dog', message: '' });
  };

  const sectionStyle = {
    padding: '80px 0',
    backgroundColor: '#ffffff'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '1rem'
  };

  const sectionSubtitleStyle = {
    fontSize: '1.1rem',
    textAlign: 'center',
    color: '#5a6c7d',
    marginBottom: '3rem'
  };

  const contactFormStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2.5rem',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
  };

  const formRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  };

  const formGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#2c3e50',
    fontWeight: '600'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem',
    borderRadius: '8px',
    border: '2px solid #e8f5f3',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '120px'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#16a085',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(22, 160, 133, 0.3)'
  };

  return (
    <section style={sectionStyle} id="contact">
      <div style={containerStyle}>
        <h2 style={sectionTitleStyle}>Get In Touch</h2>
        <p style={sectionSubtitleStyle}>Have questions? We'd love to hear from you</p>
        <div style={contactFormStyle}>
          <div style={formRowStyle}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#16a085'}
                onBlur={(e) => e.target.style.borderColor = '#e8f5f3'}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#16a085'}
                onBlur={(e) => e.target.style.borderColor = '#e8f5f3'}
              />
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="petType" style={labelStyle}>Pet Type</label>
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#16a085'}
              onBlur={(e) => e.target.style.borderColor = '#e8f5f3'}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you and your pet?"
              style={textareaStyle}
              onFocus={(e) => e.target.style.borderColor = '#16a085'}
              onBlur={(e) => e.target.style.borderColor = '#e8f5f3'}
            />
          </div>
          <button 
            onClick={handleSubmit}
            style={submitButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#138d75';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#16a085';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;