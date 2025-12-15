import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '3rem 0 1.5rem'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: '1.5rem'
  };

  const footerLogoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const footerLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'rgba(255,255,255,0.8)',
    transition: 'color 0.3s ease'
  };

  const footerBottomStyle = {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={footerContentStyle}>
          <div style={footerLogoStyle}>🐾 PawHealth</div>
          <ul style={footerLinksStyle}>
            <li><a href="#about" style={linkStyle}>About</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
            <li><a href="#privacy" style={linkStyle}>Privacy Policy</a></li>
          </ul>
        </div>
        <div style={footerBottomStyle}>
          <p>&copy; 2024 PawHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;