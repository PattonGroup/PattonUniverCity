import React from 'react';

import './services.css';

const GradSchoolSuite = () => {
    return (
        <>
            <section className="services-section spad" style={{background: 'whitesmoke'}}>
                <div className="container">
                    <div className="row">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <h3 data-testid="header-main" className="service-title">Innovative Education</h3>
                            <p data-testid="subtitle-main" className="service-subtitle">Preparing students to make meaningful contributions to society as 
                                engaged citizens and leaders in a complex world</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img data-testid="image1" className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/2GC8Qpa.jpg'} alt="Crypto Kids" width="600px" height="250px"/>
                                <br/><br/>
                                <h5 data-testid="header1" className="services-subtitle">Crypto for Kids</h5>                                   
                                <p data-testid="paragraph1">Need Content</p>
                                <a className="services-link" href="/">Tutoring {'>'}</a>

                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img data-testid="image2" className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/jgJX7TV.jpg'} alt="Youth Entrepreneurship"  width="600px" height="250px"/>
                                <br/><br/>
                                <h5 data-testid="header2" className="services-subtitle">Youth Entrepreneurship</h5>
                                <p data-testid="paragraph2">Need Content</p>
                                <a className="services-link " href="/">College Coaching {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img data-testid="image3" className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/lrRP2aA.jpg'} alt="Yoga"  width="600px" height="250px"/>
                                <br/><br/>
                                <h5 data-testid="header3" className="services-subtitle">Yoga and Mindfulness</h5>
                                <p data-testid="paragraph3">Need Content</p>
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