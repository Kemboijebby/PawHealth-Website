import React from 'react';

const Hero = () => {
  const heroStyle = {
    paddingTop: '120px',
    paddingBottom: '80px',
    background: 'linear-gradient(135deg, #e8f5f3 0%, #f0f9ff 100%)',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const heroContentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  };

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const heroSubtitleStyle = {
    fontSize: '1.25rem',
    color: '#5a6c7d',
    marginBottom: '2rem',
    lineHeight: '1.6'
  };

  const ctaButtonStyle = {
    backgroundColor: '#16a085',
    color: 'white',
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(22, 160, 133, 0.3)'
  };

  const imagePlaceholderStyle = {
    backgroundColor: '#d4edda',
    borderRadius: '20px',
    padding: '3rem',
    textAlign: 'center',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  };

  const placeholderIconStyle = {
    fontSize: '6rem',
    marginBottom: '1rem'
  };

  return (
    <section style={heroStyle} id="home">
      <div style={containerStyle}>
        <div style={heroContentStyle}>
          <div>
            <h1 style={heroTitleStyle}>Quality Pet Care, Anytime.</h1>
            <p style={heroSubtitleStyle}>
              Book trusted vets for home visits, virtual consultations, and emergency care.
            </p>
            <button 
              style={ctaButtonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Book a Vet
            </button>
          </div>
          <div style={imagePlaceholderStyle}>
            {/* Replace with actual image: <img src="/images/hero-pet-vet.png" alt="Pet with veterinarian" /> */}
            <span style={placeholderIconStyle}>🐕‍🦺</span>
            <p style={{color: '#5a6c7d', fontSize: '1.1rem'}}>Pet + Vet Image</p>
          </div>
        </div>
      </div>
    </section>
  );
};
