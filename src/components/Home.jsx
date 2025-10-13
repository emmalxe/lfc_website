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
              <h2 className="card-title">Important Notice</h2>
              <p className="notice-text">
                By 1st September 2025, our clinic will be relocated to a Pink Container along the main road of Jurong West Avenue 5 due to Gek Poh Shopping Centre upgrading.
              </p>
              <button className="more-info-btn" onClick={() => setActiveTab('contact')}>
                Click here for more information
              </button>
            </div>
          </AnimatedSection>

          {/* Telephone Enquiries Card - Light Grey */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="telephone-card">
              <h2 className="card-title">Telephone Enquiries</h2>
              <div className="phone-number">
                <span className="phone-placeholder">1234 5678</span>
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
