import React from 'react';
import GradientText from './GradientText';
import './Hero.css';

const Hero = ({ setActiveTab }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <GradientText
            colors={["#FFB6C1", "#CDB4DB", "#FFB6C1", "#CDB4DB", "#FFB6C1"]}
            animationSpeed={3}
            showBorder={false}
            className="hero-gradient-text"
          >
            Big or Small, We Care for All!
          </GradientText>
        </h1>
        <p className="hero-subheading">Trusted family healthcare with compassion and expertise.</p>
        <div className="cta-buttons">
          <a href="https://book.health.gov.sg/offerings/99/institutions/553/timeslots" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Appointment</a>
          <a href="#" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }}>Get Started Today</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/references/logo_upscaled.svg" alt="Lee Family Clinic" className="hero-logo" />
      </div>
    </section>
  );
};

export default Hero;
