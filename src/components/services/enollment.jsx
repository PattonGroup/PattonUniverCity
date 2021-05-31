import React from 'react';
import Spolight from '../../assets/images/spotlight.jpeg';
import './services.css';

const Enrollment = () => {
    return (
        <>
             <section className="enroll-section set-bg" data-setbg={Spolight}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title text-white">
                                <h3>Enrollment</h3>
                                <p>Get started with us to explore the exciting</p>
                            </div>
                            <div className="enroll-list text-white">
                                <div className="enroll-list-item">
                                    <span>1</span>
                                    <h5>Contact</h5>
                                    <p>Lorem ipsum dolor sitdo amet, consectetur dont adipis elit. Vivamus interdum ultrices augue.</p>
                                </div>
                                <div className="enroll-list-item">
                                    <span>2</span>
                                    <h5>Consulting</h5>
                                    <p>Lorem ipsum dolor sitdo amet, consectetur dont adipis elit. Vivamus interdum ultrices augue.</p>
                                </div>
                                <div className="enroll-list-item">
                                    <span>3</span>
                                    <h5>Register</h5>
                                    <p>Lorem ipsum dolor sitdo amet, consectetur dont adipis elit. Vivamus interdum ultrices augue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 p-lg-0 p-4">
                            <img className="enrollment-img" src={Spolight} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Enrollment;