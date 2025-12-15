import React, { useState } from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Vet Home Visits',
      description: 'Professional veterinary care in the comfort of your home'
    },
    {
      icon: '💻',
      title: 'Virtual Consultations',
      description: 'Connect with experienced vets online for quick advice'
    },
    {
      icon: '💉',
      title: 'Vaccinations',
      description: 'Keep your pet protected with timely vaccinations'
    },
    {
      icon: '🚨',
      title: 'Emergency Pet Care',
      description: '24/7 emergency services for urgent situations'
    },
    {
      icon: '✨',
      title: 'Grooming & Wellness',
      description: 'Complete grooming and wellness check-ups'
    },
    {
      icon: '🏥',
      title: 'Health Monitoring',
      description: 'Regular health tracking and preventive care plans'
    }
  ];

  const sectionStyle = {
    padding: '80px 0',
    backgroundColor: '#ffffff'
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

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  return (
    <section style={sectionStyle} id="services">
      <div style={containerStyle}>
        <h2 style={sectionTitleStyle}>Our Services</h2>
        <p style={sectionSubtitleStyle}>Comprehensive pet care solutions for every need</p>
        <div style={servicesGridStyle}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '2rem',
    textAlign: 'center',
    border: '2px solid #e8f5f3',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 10px 30px rgba(22, 160, 133, 0.15)' : '0 2px 10px rgba(0,0,0,0.05)',
    cursor: 'pointer'
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem'
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
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconStyle}>{icon}</div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Services;