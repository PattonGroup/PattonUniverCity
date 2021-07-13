import React from 'react';

import './services.css';

const GradSchoolSuite = () => {
    return (
        <>
            <section className="services-section spad" style={{background: 'whitesmoke'}}>
                <div className="container">
                    <div className="row">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <h3 className="service-title">Innovative Education</h3>
                            <p className="service-subtitle">Preparing students to make meaningful contributions to society as 
                                engaged citizens and leaders in a complex world</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/2GC8Qpa.jpg'} alt="TentCity" width="600px" height="250px"/>
                                <br/><br/>
                                <h5 className="services-subtitle">Crypto for Kids</h5>                                   
                                <p>This course teaches the basics of money and currency used throughout the world and how we are evolving economically into a cryptocurrency space. 
                                    Students of all ages are invited to enroll in this course. This course is virtual. </p>
                                <a className="services-link" href="/">Tutoring {'>'}</a>

                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/jgJX7TV.jpg'} alt="BookClub"  width="600px" height="250px"/>
                                <br/><br/>
                                <h5 className="services-subtitle">Youth Entrepreneurship</h5>
                                <p>This course allows students to identify their personal interests and possible career aspirations to uncover strategies to earn income through entrepreneurship. 
                                    This course is currently virtual.</p>
                                <a className="services-link " href="/">College Coachnig {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/lrRP2aA.jpg'} alt="BookClub"  width="600px" height="250px"/>
                                <br/><br/>
                                <h5 className="services-subtitle">Yoga and Mindfulness</h5>
                                <p>Need Content</p>
                                <a className="services-link" href="/">Mentoring {'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GradSchoolSuite;