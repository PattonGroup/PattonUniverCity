import React from 'react';

import Spolight from '../../assets/images/spotlight.jpeg';
import BookClub from '../../assets/images/bookClub.jpg';
import './event.css';

const EventOverview = () => {
    
    return (
        <>
          <section className="event-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 event-item">
                            <div>
                                <h5>Spotlight</h5>                                   
                                <img className="event-img img-fluid img-thumbnail" src={Spolight} alt="TentCity" width="600px" height="250px"/>
                                <br/><br/>
                                <p>Student Name</p>
                                <p>Student desrciption</p>
                            </div>
                        </div>
                        <div className="col-md-6 event-item">
                            <div className="">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h5>Online Events</h5>
                                    <div>
                                        <span> ← </span>
                                        
                                        <span> → </span>
                                    </div>
                                </div>
                                <img className="event-img img-fluid img-thumbnail" src={Spolight} alt="BookClub"  width="600px" height="250px"/>
                                <br/><br/>
                                <p>Events desrciption</p>
                                <p>Student desrciption</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <h5>Important Dates</h5>
                        </div>
                        <hr/>
                        <div className="col-sm-1">
                            <div>
                                <h5>May</h5>
                                <h5>20</h5>
                            </div>
                        </div>
                        <div className="col-sm-1">
                           <h5 style={{fontSize: '3rem'}}>|</h5>
                        </div>
                        <div className="col-sm-4">
                            <h5><a href="/" className="event-links">Some Event</a></h5>
                        </div>
                        <div className="col-sm-1">
                            <div>
                                <h5>May</h5>
                                <h5>20</h5>
                            </div>
                        </div>
                        <div className="col-sm-1">
                           <h5 style={{fontSize: '3rem'}}>|</h5>
                        </div>
                        <div className="col-sm-4">
                           <h5><a href="/" className="event-links">Some Event</a></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventOverview;