import React from 'react';
import Hero from './Hero';
import RollingGallery from './RollingGallery';
import AnimatedSection from './AnimatedSection';
import './Home.css';

const Home = ({ setActiveTab }) => {

  return (
    <div className="container">
      <Hero setActiveTab={setActiveTab} />
      
      {/* New Card Layout */}
      <div className="cards-layout" id="important-notice">
        {/* Top Row Cards */}
        <div className="top-cards">
          {/* Important Notice Card - Pink */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="important-notice-card">
              <div className="notice-card-header">
                <div className="notice-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <h2 className="notice-card-title">Important Notice</h2>
              </div>
              <div className="notice-card-body">
                <p className="notice-text">
                  To facilitate the reconstruction of <strong>Gek Poh Shopping Center</strong>, our clinic has relocated to a <strong>Pink Container</strong> along the main road of <strong>Jurong West Avenue 5</strong>.
                </p>
              </div>
              <div className="notice-card-footer">
                <button className="more-info-btn" onClick={() => setActiveTab('contact')}>
                  Click here for more information
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Telephone Enquiries Card - Light Grey */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="telephone-card">
              <h2 className="card-title">Telephone Enquiries</h2>
              <div className="phone-number">
                <a href="tel:+6567940217" className="phone-placeholder">+65 6794 0217</a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Operating Hours Card - Full Width Bottom */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="operating-hours-card">
            <h2 className="card-title">Operating Hours</h2>
            
            <div className="hours-grid">
              <div className="hours-card">
                <h3>Monday to Friday</h3>
                <div className="time-slot">
                  <strong>Morning & Afternoon</strong>
                  <p>8:00 AM - 3:00 PM</p>
                </div>
                <div className="time-slot">
                  <strong>Evening</strong>
                  <p>5:00 PM - 9:00 PM</p>
                </div>
                <div className="closed-notice">
                  Closed: 3:00 PM - 5:00 PM
                </div>
              </div>
              <div className="hours-card">
                <h3>Saturday</h3>
                <div className="time-slot">
                  <strong>Morning Only</strong>
                  <p>8:00 AM - 3:00 PM</p>
                </div>
              </div>
              <div className="hours-card">
                <h3>Sunday and Public Holidays</h3>
                <div className="time-slot">
                  <p>CLOSED</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
