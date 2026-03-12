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
    { name: 'Shingrix (Shingles)', price: '$300' },
    { name: 'Tetanus', price: '$50' },
    { name: 'Twinrix (Hepatitis A + B)', price: '$130' },
    { name: 'Typhoid', price: '$50' },
  ];

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="section" id="our-services">
        <h2 className="section-header">Our Services</h2>
        <p className="section-subtitle">✓ CHAS/PHPC/HEALTHIER SG Clinic</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Consultation</h3>
            <ul className="service-list">
              <li>Acute medical condition 急性病症</li>
              <li>Chronic medical condition 慢性病症</li>
              <li>Dermatological condition (Skin) 皮肤科 (皮肤)</li>
              <li>Geriatric illness (elderly) 老年疾病 (老人)</li>
              <li>Paediatric illness (children over 2 years old) 儿科疾病 (两岁以上儿童)</li>
              <li>Travel medicine 旅游医疗</li>
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
              <li>Chickenpox 水痘</li>
              <li>Diphtheria, Pertussis and Tetanus 白喉、百日咳及破伤风</li>
              <li>Hepatitis A and B 甲型及乙型肝炎</li>
              <li>Influenza 流感</li>
              <li>Measles, Mumps and Rubella 麻疹、腮腺炎及风疹</li>
              <li>Pneumococcal 肺炎球菌</li>
              <li>Travellers 旅游预防接种</li>
              <li>Typhoid 伤寒</li>
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
              <li>General wound care 一般伤口护理</li>
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
              <li>Adoption 领养体检</li>
              <li>Domestic helper 女佣体检</li>
              <li>Driving licence 驾驶执照体检</li>
              <li>Food handler 食品从业者体检</li>
              <li>Outward bound 探险活动体检</li>
              <li>Pre-employment 职前体检</li>
              <li>Pre-marital 婚前体检</li>
              <li>University pre-admission 大学入学体检</li>
              <li>Work Permit 工作准证体检</li>
              <li>Healthier SG Screen For Life Screening 健康新加坡终身筛查</li>
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
              <li>Breast screening (mammogram) 乳房检查 (乳房X光)</li>
              <li>Cervix screening (Thin Prep Pap Smear / HPV DNA Screening) 子宫颈检查 (液基薄层细胞检测 / HPV DNA筛查)</li>
              <li>Family planning (contraception) 家庭计划 (避孕)</li>
              <li>Gynaecological problems 妇科问题</li>
              <li>Menopause 更年期</li>
              <li>Osteoporosis 骨质疏松症</li>
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
              <li>Cholesterol 胆固醇</li>
              <li>Diabetic mellitus 糖尿病</li>
              <li>General health screening 一般健康检查</li>
              <li>Hepatitis A and B 甲型及乙型肝炎</li>
              <li>Hypertension 高血压</li>
              <li>STD 性传播疾病</li>
              <li>Thyroid function 甲状腺功能</li>
              <li>Weight management 体重管理</li>
            </ul>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <section className="section" id="vaccination-packages">
        <h2 className="section-header">Vaccination</h2>

        <div className="packages-grid">
          <div className="package-table">
            <table>
              <thead>
                <tr>
                  <th>Vaccines</th>
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
                  <th>Vaccines</th>
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
                <li>Liver Tumour Marker (AFP) 肝癌蛋白</li>
                <li>Colon Tumour Marker (CEA) 结肠癌蛋白</li>
                <li>Ca125 Ovarian Tumour Marker (Female) 卵巢癌抗原</li>
                <li>PSA Prostate Tumour Marker (Male) 前列腺特异抗原</li>
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
                <li>Liver Tumour Marker (AFP) 肝癌蛋白</li>
                <li>Colon Tumour Marker (CEA) 结肠癌蛋白</li>
                <li>Ca125 Ovarian Tumour Marker (Female) 卵巢癌抗原</li>
                <li>PSA Prostate Tumour Marker (Male) 前列腺特异抗原</li>
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
