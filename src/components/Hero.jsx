import React from 'react';
import { Link } from 'react-router-dom';
import GradientText from './GradientText';
import './Hero.css';

const Hero = () => {
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
          <Link to="/contact" className="btn btn-secondary">Get Started Today</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={`${import.meta.env.BASE_URL}references/logo_upscaled_2.svg`} alt="Lee Family Clinic" className="hero-logo" />
      </div>
    </section>
  );
};

export default Hero;
