import React from 'react';
import './services.css';

const TechSuite = () => {
    return (
        <>
             <section className="services-section spad" style={{background: 'whitesmoke'}}>
                <div className="container">
                    <div className="row">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                            <h3 className="service-title">The Future of Tech</h3>
                            <p className="service-subtitle" >Preparing students to make meaningful contributions to society as 
                                engaged citizens and leaders in a complex world</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/WNW7C0r.jpg'} alt="Software Development" />
                                <br/><br/>
                                <h5 className="services-subtitle">Software Development</h5>                                   
                                <p> We develop software developers fostering a learning environment to identify user needs, build programs, test out new software, 
                                    and make improvements. Using various source debuggers and visual development environments to modify, write, and debug 
                                    software for client applications. Along with creating documentation client software to create maintainable stand alone services.</p>
                                <a className="services-link" href="/">Software Developement {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/rJG9EA9.jpg'} alt="Blockchain"  />
                                <br/><br/>
                                <h5 className="services-subtitle">Blockchain</h5>
                                <p>Blockchain has recently become synonymous with cryptocurrency, but its applications go far beyond financial transactions. The 
                                    expansion of blockchain left a few under represented groups. We will shed light on this gap with our research and development 
                                    focused on the creation of new applications for education and women in the ecosystem.</p>
                                <a className="services-link" href="/">Blockchain {'>'}</a>
                            </div>
                        </div>
                        <div className="col-md-4 services-item">
                            <div className="">
                                <img className="services-img img-fluid img-thumbnail" src={'https://i.imgur.com/3wpYwa6.jpg'} alt="Artifical Intelligence"  />
                                <br/><br/>
                                <h5 className="services-subtitle">Artifical Intelligence</h5>
                                <p>The AI Intelligence program provides a introduction to machine learning, as well as opportunities to explore theoretical and 
                                    project-based learning in natural language processing and understanding. We will go from foundation to advanced skills in 
                                    the principles that underlie AI including logic, knowledge representation, and  probabilistic models. </p>
                                <a className="services-link" href="/">Artifical Intelligence {'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechSuite;