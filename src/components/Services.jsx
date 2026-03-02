import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Services.css';

const Services = () => {
  const vaccinationPackages1 = [
    { name: 'Boostrix', price: '$60' },
    { name: 'Cervarix', price: '$98.10' },
    { name: 'Chickenpox', price: '$70' },
    { name: 'Gardasil 9', price: '$270' },
    { name: 'Hepatitis A (Child)', price: '$60' },
    { name: 'Hepatitis A (Adult)', price: '$110' },
    { name: 'Hepatitis B (Adult)', price: '$52' },
  ];

  const vaccinationPackages2 = [
    { name: 'Influenza', price: '$50' },
    { name: 'MMR', price: '$50' },
    { name: 'Prevenar 20 (Adult > 50 yrs old)', price: '$147.15' },
    { name: 'Tetanus', price: '$50' },
    { name: 'Twinrix (Hepatitis A + B)', price: '$130' },
    { name: 'Typhoid', price: '$50' },
  ];

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="section" id="our-services">
        <h2 className="section-header">Our Services</h2>
        <p className="section-subtitle">Comprehensive healthcare for all ages</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Consultation</h3>
            <ul className="service-list">
              <li>Acute medical condition</li>
              <li>Chronic medical condition</li>
              <li>Dermatological condition (Skin)</li>
              <li>Geriatric illness (elderly)</li>
              <li>Paediatric illness (children over 2 years old)</li>
              <li>Travel medicine</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2v6m0 0v14m0-14h4.5a2.5 2.5 0 0 1 0 5H12" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="1" fill="#6b8e9d"/>
                <circle cx="12" cy="16" r="1" fill="#6b8e9d"/>
              </svg>
            </div>
            <h3>Immunisation</h3>
            <ul className="service-list">
              <li>Chickenpox</li>
              <li>Diphtheria, Pertussis and Tetanus</li>
              <li>Hepatitis A and B</li>
              <li>Influenza</li>
              <li>Measles, Mumps and Rubella</li>
              <li>Pneumococcal</li>
              <li>Travellers</li>
              <li>Typhoid</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 20v-6M6 20V10M18 20V4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Procedures</h3>
            <ul className="service-list">
              <li>General wound care</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Check Up</h3>
            <ul className="service-list">
              <li>Adoption</li>
              <li>Domestic helper</li>
              <li>Driving licence</li>
              <li>Food handler</li>
              <li>Outward bound</li>
              <li>Pre-employment</li>
              <li>Pre-marital</li>
              <li>University pre-admission</li>
              <li>Work Permit</li>
              <li>Healthier SG Screen For Life Screening</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Women's Health</h3>
            <ul className="service-list">
              <li>Breast screening (mammogram)</li>
              <li>Cervix screening (Thin Prep Pap Smear / HPV DNA Screening)</li>
              <li>Family planning (contraception)</li>
              <li>Gynaecological problems</li>
              <li>Menopause</li>
              <li>Osteoporosis</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Health Screening</h3>
            <ul className="service-list">
              <li>Cholesterol</li>
              <li>Diabetic mellitus</li>
              <li>General health screening</li>
              <li>Hepatitis A and B</li>
              <li>Hypertension</li>
              <li>STD</li>
              <li>Thyroid function</li>
              <li>Weight management</li>
            </ul>
          </div>
        </div>

        <div className="chas-banner">
          ✓ We are CHAS/PHPC approved
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <section className="section" id="vaccination-packages">
        <h2 className="section-header">Vaccination Packages</h2>
        <p className="section-subtitle">W.E.F. 1 May 2014</p>

        <div className="packages-grid">
          <div className="package-table">
            <table>
              <thead>
                <tr>
                  <th>Package</th>
                  <th className="price">Price (with GST)</th>
                </tr>
              </thead>
              <tbody>
                {vaccinationPackages1.map((pkg, index) => (
                  <tr key={index}>
                    <td>
                      {pkg.name}
                      {pkg.note && <><br/><small style={{color: '#999'}}>{pkg.note}</small></>}
                    </td>
                    <td className="price">{pkg.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="package-table">
            <table>
              <thead>
                <tr>
                  <th>Package</th>
                  <th className="price">Price (with GST)</th>
                </tr>
              </thead>
              <tbody>
                {vaccinationPackages2.map((pkg, index) => (
                  <tr key={index}>
                    <td>
                      {pkg.name}
                      {pkg.note && <><br/><small style={{color: '#999'}}>{pkg.note}</small></>}
                    </td>
                    <td className="price">{pkg.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={300}>
        <section className="section" id="health-screening">
          <h2 className="section-header">Health Screening Packages</h2>
          <p className="section-subtitle">Comprehensive health screening options</p>
          
          <div className="screening-packages-grid">
            {/* Basic Package Card */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Basic ($100)</h3>
              <ul className="service-list">
                <li>Full Blood Count 血液检查</li>
                <li>Cholesterol Screen 胆固醇检查</li>
                <li>Kidney Screen 肾功能检查</li>
                <li>Liver Screen 肝功能检查</li>
                <li>Bone and Joint Screen 骨骼和关节检查</li>
                <li>Urine Analysis 尿液检查</li>
              </ul>
            </div>

            {/* Executive Package Card */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Executive ($200)</h3>
              <ul className="service-list">
                <li>Full Blood Count 血液检查</li>
                <li>Cholesterol Screen 胆固醇检查</li>
                <li>Kidney Screen 肾功能检查</li>
                <li>Liver Screen 肝功能检查</li>
                <li>Bone and Joint Screen 骨骼和关节检查</li>
                <li>Urine Analysis 尿液检查</li>
                <li>Hepatitis A and B Screen 肝炎检查</li>
                <li>Thyroid Screen 甲状腺检查</li>
                <li>Liver Tumour Marker 肝癌蛋白</li>
                <li>Colon Tumour Marker (CEA)</li>
                <li>Linear Tumour Marker (AFP)</li>
                <li>Stool Occult Blood 粪隐血</li>
              </ul>
            </div>

            {/* Premium Package Card */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Premium ($250)</h3>
              <ul className="service-list">
                <li>Full Blood Count 血液检查</li>
                <li>Cholesterol Screen 胆固醇检查</li>
                <li>Kidney Screen 肾功能检查</li>
                <li>Liver Screen 肝功能检查</li>
                <li>Bone and Joint Screen 骨骼和关节检查</li>
                <li>Urine Analysis 尿液检查</li>
                <li>Hepatitis A and B Screen 肝炎检查</li>
                <li>Thyroid Screen 甲状腺检查</li>
                <li>Liver Tumour Marker 肝癌蛋白</li>
                <li>Colon Tumour Marker (CEA)</li>
                <li>Linear Tumour Marker (AFP)</li>
                <li>CA125 (Female) 卵巢癌抗原</li>
                <li>PSA (Male) 前列腺特异抗原</li>
                <li>Stool Occult Blood 粪隐血</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Services;
