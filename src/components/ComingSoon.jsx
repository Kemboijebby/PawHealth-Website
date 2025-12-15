import React, { useState } from 'react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify ${email} when new features launch.`);
    setEmail('');
  };

  const sectionStyle = {
    padding: '80px 0',
    backgroundColor: '#2c3e50',
    color: 'white'
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 2rem',
    textAlign: 'center'
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const featureTagStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: '1rem',
    backdropFilter: 'blur(10px)'
  };

  const comingSoonTextStyle = {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    opacity: 0.9
  };

  const notifyFormStyle = {
    display: 'flex',
    gap: '1rem',
    maxWidth: '500px',
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const inputStyle = {
    flex: '1',
    minWidth: '250px',
    padding: '0.875rem 1.25rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none'
  };

  const buttonStyle = {
    padding: '0.875rem 2rem',
    backgroundColor: '#16a085',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(22, 160, 133, 0.3)'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={sectionTitleStyle}>More Features Coming Soon!</h2>
        <div style={featuresContainerStyle}>
          <div style={featureTagStyle}>📋 Digital Pet Records</div>
          <div style={featureTagStyle}>👥 Vet Profiles & Reviews</div>
          <div style={featureTagStyle}>💊 Online Pet Pharmacy</div>
          <div style={featureTagStyle}>🎓 Pet Care Resources</div>
        </div>
        <p style={comingSoonTextStyle}>
          Be the first to know when we launch new features
        </p>
        <div style={notifyFormStyle}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <button 
            onClick={handleSubmit}
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;