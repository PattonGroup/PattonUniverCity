import React from 'react';
import './services.css';

const Enrollment = () => {
  return (
    <>
      <section className="enroll-section set-bg" data-setbg={'https://i.imgur.com/Lwcmxuy.png'}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title text-white">
                <h3 data-testid="header-main">Enrollment</h3>
                <p data-testid="paragraph-main">We invite you to join our learning community where we work 
                  collaboratively with each other to prepare for a space in the future for 
                  our youth to thrive.</p>
              </div>
              <div className="enroll-list text-white">
                <div className="enroll-list-item">
                  <span data-testid="span1">1</span>
                  <h5 data-testid="header1">Interested</h5>
                  <p data-testid="paragraph1">
                    Browse our site or read our Patton Report for the 
                    latest updated on what we are doing. 
                  </p>
                </div>
                <div className="enroll-list-item">
                  <span data-testid="span2">2</span>
                  <h5 data-testid="header2">Consulting</h5>
                  <p data-testid="paragraph2">
                    Need more information that you cannot find on our website or 
                    social media pages? Feel free to direct message us or email us 
                    at hr@pattonunivercity.com
                  </p>
                </div>
                <div className="enroll-list-item">
                  <span data-testid="span3">3</span>
                  <h5 data-testid="header3">Register</h5>
                  <p data-testid="paragraph3">
                    Express your interest through filling out a simply application 
                    form found at the bottom of the page.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 p-lg-0 p-4">
              <img data-testid="image" className="enrollment-img" src={'https://i.imgur.com/JfS1edn.jpg'} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enrollment;
