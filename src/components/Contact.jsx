import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="section" id="contacts">
        <h3 className="section-header">Contacts</h3>
        <p className="section-subtitle">Get in touch with us for appointments and enquiries</p>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className="contact-label">Phone</strong>
                <a href="tel:+6567940217" className="contact-link">+65 6794 0217</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className="contact-label">Email</strong>
                <a href="mailto:leefamilyclinic@gmail.com" className="contact-link">leefamilyclinic@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className="contact-label">Address</strong>
                <span className="contact-address">
                  Block 762 Jurong West Street 75<br/>
                  #02-262 Gek Poh Shopping Centre<br/>
                  Singapore 640762
                </span>
                <div className="relocated-notice">
                  We have temporarily relocated, <br/>
                  Refer to <a href="#location-updates" className="location-link">Location Updates</a> for more information
                  
                </div>
              </div>
            </div>

            <div className="appointment-section">
              <a href="https://book.health.gov.sg/offerings/99/institutions/553/timeslots" target="_blank" rel="noopener noreferrer" className="btn-appointment">Book Appointment Online</a>
              <p className="appointment-note">Appointments must be made at least 2 days in advance.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <h3>Operating Hours</h3>
            
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className="contact-label">Monday - Friday</strong>
                <span className="contact-hours">
                  8:00 AM - 3:00 PM<br/>
                  5:00 PM - 9:00 PM
                </span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className="contact-label">Saturday</strong>
                <span className="contact-hours">8:00 AM - 3:00 PM</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className="contact-label">Sunday & Public Holidays</strong>
                <span className="contact-hours">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="location-section" id="location-updates">
          <h3 className="location-title">Location Updates</h3>
          
          {/* Top: Blue Info Card */}
          <div className="location-info-card">
            <p className="location-info-text">
              By 1st September 2025, our clinic will be relocated to a Pink Container along the main road of Jurong West Avenue 5 due to Gek Poh Shopping Centre upgrading.
            </p>
          </div>

          {/* Bottom: Video and Image Grid */}
          <div className="location-media-grid">
            {/* Left: Portrait Video */}
            <div className="location-video-container">
              <video 
                className="location-video"
                controls
                muted
              >
                <source src={`${import.meta.env.BASE_URL}references/directions.MOV`} type="video/quicktime" />
                <source src={`${import.meta.env.BASE_URL}references/directions.MOV`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right: Container Image */}
            <div className="location-image-container">
              <img 
                src={`${import.meta.env.BASE_URL}references/container.jpg`}
                alt="Pink Container Clinic" 
                className="location-image"
              />
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
