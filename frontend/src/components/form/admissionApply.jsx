import React from 'react';
import './admissionApply.css';

const AdmissionApply = () => {
  return (
    <>
      <div className="admission_area">
        <div className="admission_inner">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-7">
                <div className="admission_form">
                  <h3 data-testid="header-admission-form">Stay in Touch</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single_input">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single_input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single_input">
                          <input type="text" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single_input">
                          <input type="text" placeholder="Email Address" />
                        </div>
                      </div>
                      {/* <div className="col-md-12">
                        <div className="single_input">
                          <textarea
                            cols="30"
                            placeholder="Write an Application"
                            rows="10"
                          ></textarea>
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <input
                          className="admission-button white"
                          value="Apply Now"
                          type="submit"
                          data-testid="button-admission-form"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionApply;
