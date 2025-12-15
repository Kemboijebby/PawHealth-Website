import React, { useState, useEffect } from 'react';

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hasNavigatedAway, setHasNavigatedAway] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.scrollY;
    let isScrolling = false;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Prevent scrolling back to hero if user has navigated away
      if (hasNavigatedAway && !isScrolling) {
        const currentScrollTop = window.scrollY;
        
        // If scrolling up and trying to go back to hero section
        if (currentScrollTop < lastScrollTop && currentScrollTop < 200) {
          isScrolling = true;
          window.scrollTo({ top: 200, behavior: 'smooth' });
          setTimeout(() => {
            isScrolling = false;
          }, 500);
        }
        
        lastScrollTop = currentScrollTop;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNavigatedAway]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? '#ffffff' : 'transparent',
    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
    transition: 'all 0.3s ease',
    padding: '1rem 0'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const navContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#16a085',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: scrolled ? '#2c3e50' : '#2c3e50',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
    paddingBottom: '4px'
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // If clicking on any link other than home, mark as navigated away
    if (href !== '#home') {
      setHasNavigatedAway(true);
    } else {
      setHasNavigatedAway(false);
    }
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const NavLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <li>
        <a 
          href={href} 
          onClick={(e) => handleNavClick(e, href)}
          style={{
            ...linkStyle,
            textDecoration: isHovered ? 'underline' : 'none',
            textDecorationColor: '#16a085',
            textUnderlineOffset: '4px',
            textDecorationThickness: '2px',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </a>
      </li>
    );
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          <div style={logoStyle}>🐾 PawHealth</div>
          <ul style={navLinksStyle}>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;