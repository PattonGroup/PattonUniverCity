import React from 'react';
import Spolight from '../../assets/images/spotlight.jpeg';
import BookClub from '../../assets/images/bookClub.jpg';
import './services.css';

const GradSchoolSuite = () => {
    return (
        <>
            <section className="services-section spad" style={{background: 'whitesmoke'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <h3 className="service-title">Education Department</h3>
                            <p className="service-subtitle">Preparing students to make meaningful contributions to society as 
                                engaged citizens and leaders in a complex world</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={Spolight} alt="TentCity" width="600px" height="250px"/>
                                <br/><br/>
                                <h5 className="services-subtitle">Tutoring</h5>                                   
                                <p>Student desrciption</p>
                                <a className="services-link" href="/">Tutoring {'>'}</a>

                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={Spolight} alt="BookClub"  width="600px" height="250px"/>
                                <br/><br/>
                                <h5 className="services-subtitle">College Coachnig</h5>
                                <p>Events desrciption</p>
                                <a className="services-link " href="/">College Coachnig {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={Spolight} alt="BookClub"  width="600px" height="250px"/>
                                <br/><br/>
                                <p>Events desrciption</p>
                                <h5 className="services-subtitle">Mentoring</h5>
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