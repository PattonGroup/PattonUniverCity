import React from 'react';
import Spolight from '../../assets/images/spotlight.jpeg';
import './services.css';

const TechSuite = () => {
    return (
        <>
             <section className="services-section spad" style={{background: 'whitesmoke'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <h3 className="service-title">Technology Department</h3>
                            <p className="service-subtitle" >Preparing students to make meaningful contributions to society as 
                                engaged citizens and leaders in a complex world</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={Spolight} alt="TentCity" />
                                <br/><br/>
                                <h5 className="services-subtitle">Software Development</h5>                                   
                                <p>Student desrciption</p>
                                <a className="services-link" href="/">Software Developement {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={Spolight} alt="BookClub"  />
                                <br/><br/>
                                <h5 className="services-subtitle">Blockchain</h5>
                                <p>Events desrciption</p>
                                <a className="services-link" href="/">Blockchain {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={Spolight} alt="BookClub"  />
                                <br/><br/>
                                <h5 className="services-subtitle">Machine Learning</h5>
                                <p>Events desrciption</p>
                                <a className="services-link" href="/">Machine Learning {'>'}</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechSuite;