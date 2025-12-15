import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/services';
import HowItWorks from './components/HowItWorks';
import ComingSoon from './components/ComingSoon';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <ComingSoon />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;