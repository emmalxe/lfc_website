import React from 'react';
import ThreeDPhotoCarouselDemo from './ThreeDPhotoCarouselDemo';
import AnimatedSection from './AnimatedSection';
import './About.css';

const About = () => {

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <div id="our-story">
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="section">
          <h2 className="section-header">In The Beginning</h2>
          <img 
            src="/references/We care for all template drawing new mural 3.jpeg" 
            alt="Mural artwork" 
            className="beginning-image"
          />
        <div className="about-content">
          <p className="about-text" style={{ textAlign: 'left' }}>
            It was a cold rainy evening sometime in February 2002, a pregnant woman and her lady colleague carried boxes of stationeries from the car park to the clinic, and then tenderly wiped off the dust on the newly installed furniture. While surveying their yet unfamiliar environment with much anticipation and excitement, a kindhearted middle-aged lady walked in and asked whether they needed to employ a cleaner, and they gladly accepted her proposal. They were the earliest staff of the clinic: Shirley Lee the resident doctor, Kartina the clinic manager, and Mdm Lim the clinic hygiene officer.
          </p>
          <p className="about-text" style={{ textAlign: 'left', marginTop: '20px' }}>
            Dr Lee conceived of this clinic at the same time as her daughter, and with the same motherly love, she brought up the clinic with her other business partners. The clinic weathered on despite the economic downturn, the SARS and H1N1 epidemic. Dr Lee eventually acquired the clinic with her family's help and continued to nurture it with the expectations that the clinic will not cease to serve the community where it is situated. Currently, the clinic provides employment to more than 15 full or part time staff.
          </p>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <section className="section">
        <h2 className="section-header">It's the journey that matters...</h2>
        <ThreeDPhotoCarouselDemo />

        <div className="about-content">
          <p className="about-text">
            Lee Family Clinic is about people. Whether it is staff or patients, people come first. Whether they are old or young, respect will be bestowed upon. Only the best will be provided, according to the needs of all who come to be served. Bearing testimony to this philosophy are our customers, who built lasting relationship with us all these years, and brought us much joy, satisfaction and encouragement each day we operate.
          </p>
        </div>
        </section>
      </AnimatedSection>
      </div>

      <AnimatedSection animation="fade-up" delay={300}>
        <section className="section" id="expectations">
          <h2 className="section-header">Expectations</h2>
        
        <div className="expectations-container">
          <div className="expectations-section">
            <h3 className="expectations-title">Our Philosophy of Care</h3>
            <ul className="expectations-list">
              <li>To provide appropriate evidence-based care for our patients.</li>
              <li>A commitment to improve the standard of clinical practice and encourage health promotion.</li>
              <li>To maintain a comfortable and supportive working environment for all the staff.</li>
              <li>To keep a happy team spirit and empathy for patients and staff alike.</li>
              <li>To ensure that communication is always open between patients and staff.</li>
            </ul>
          </div>

          <div className="expectations-section">
            <h3 className="expectations-title">Our Responsibility to Our Patients</h3>
            <ul className="expectations-list">
              <li>You will be treated with respect whenever you visit or telephone the clinic.</li>
              <li>You will have a channel to feedback on your care and services.</li>
              <li>You have a right to confidentiality.</li>
              <li>We will offer appointment times for non-urgent consultations.</li>
              <li>Written requests for repeat prescriptions, where agreed by the doctor, will be available for collection in two working days.</li>
              <li>Patients will be treated as individuals and partners in their healthcare, irrespective of their ethnic origin or religious or cultural beliefs.</li>
              <li>We will attend to patients with life threatening conditions first should they present to the clinic.</li>
            </ul>
          </div>

          <div className="expectations-section">
            <h3 className="expectations-title">The Patient's Responsibilities</h3>
            <p className="expectations-intro">For our team to give you and fellow patients the best possible service, we would ask you to note the following guidelines:</p>
            <ul className="expectations-list">
              <li>Provide information necessary for your care</li>
              <li>Follow the doctor's recommended treatment plan</li>
              <li>Show respect and consideration for others</li>
              <li>Keep your phone call brief and avoid calling during the peak morning and late evening time for non-urgent matters.</li>
              <li>Do proceed to the nearest hospital's Accident and Emergency if you encounter a serious or life-threatening situation.</li>
              <li>We reserve the right to protect our staff from any physical or verbal abuse</li>
              <li>Remember, you are responsible for your own health and the health of your children. We will give you our professional help and advice but need your co-operation to keep you healthy.</li>
            </ul>
          </div>
        </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
