import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: '🔍',
      title: 'Choose a Service',
      description: 'Select from our range of veterinary services'
    },
    {
      number: '2',
      icon: '👨‍⚕️',
      title: 'Select a Vet',
      description: 'Pick a trusted veterinarian from our network'
    },
    {
      number: '3',
      icon: '📅',
      title: 'Book & Get Care',
      description: 'Schedule an appointment and receive quality care'
    }
  ];

  const sectionStyle = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f5f3 100%)'
  };

  const containerStyle = {
    maxWidth: '1200px',
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

  const stepsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    maxWidth: '900px',
    margin: '0 auto'
  };

  return (
    <section style={sectionStyle} id="about">
      <div style={containerStyle}>
        <h2 style={sectionTitleStyle}>How It Works</h2>
        <p style={sectionSubtitleStyle}>Simple steps to quality pet care</p>
        <div style={stepsContainerStyle}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, icon, title, description }) => {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    position: 'relative'
  };

  const numberStyle = {
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '40px',
    backgroundColor: '#16a085',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(22, 160, 133, 0.3)'
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    marginTop: '1rem'
  };

  const titleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '0.75rem'
  };

  const descriptionStyle = {
    color: '#5a6c7d',
    lineHeight: '1.6'
  };

  return (
    <div style={cardStyle}>
      <div style={numberStyle}>{number}</div>
      <div style={iconStyle}>{icon}</div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default HowItWorks;