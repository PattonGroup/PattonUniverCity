import React, { useState } from 'react';
import Spolight from '../../assets/images/spotlight.jpeg';
import eventData from './eventData';
import './event.css';

const EventOverview = () => {
    const [currentEvent, setCurrentEvent] = useState(0);
    const [isLeftArrow, setIsLeftArrow] = useState(false);
    const [isRightArrow, setIsRightArrow] = useState(false);
    const length = eventData.length;
    
    const nextSlide = () => {
        setIsLeftArrow(false);
        setIsRightArrow(true);
        setCurrentEvent(currentEvent === length - 1 ? 0 : currentEvent + 1);
    }
    const previousSlide = () => {
        setIsRightArrow(false);
        setIsLeftArrow(true);
        setCurrentEvent(currentEvent === 0? length - 1 : currentEvent - 1);
    }
    

    return (
        <>
          <section className="event-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 event-item">
                            <div>
                                <h5>Spotlight</h5>                                   
                                <img className="event-img img-fluid img-thumbnail" src={Spolight} alt="TentCity" width="600px" height="250px" />
                                <br/><br/>
                                <p>Student Name</p>
                                <p>Student desrciption</p>
                            </div>
                        </div>
                        <div className="col-md-6 event-item">
                            <div className="">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h5>Online Events</h5>
                                    <div className = "arrows">
                                        <span className = {isLeftArrow === true ? "carousel-left-arrow active" : "carousel-left-arrow"} onClick = {previousSlide}>&lt; </span>
                                        <span className = {isRightArrow === true ? "carousel-right-arrow active" : "carousel-right-arrow"} onClick = {nextSlide}> &gt;</span>
                                    </div>
                                </div>
                                {
                                    eventData.map((e, i) => {
                                        return(
                                           <div className = {i === currentEvent ? "event-carousel active":"event-carousel"} key = {i}>
                                                {i === currentEvent && (
                                                    <>
                                                    <img className="event-img img-fluid img-thumbnail" src={e.img_url} alt="event1" width="600px" height="250px" />   
                                                    <br/><br/>
                                                    <p>{e.event_description}</p>
                                                    <p>{e.student_desrciption}</p>    
                                                    </>
                                                )}
                                            </div>        
                                        )
                                    })
                                }

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
                                <h5>Jun. - July</h5>
                                <h5>28</h5>
                            </div>
                        </div>
                        <div className="col-sm-1">
                           <h5 style={{fontSize: '3rem'}}>|</h5>
                        </div>
                        <div className="col-sm-4">
                            <h5><a href="/" className="event-links">Summer Phonics Class for Kids</a></h5>
                        </div>
                        <div className="col-sm-1">
                            <div>
                                <h5>Jun. - July</h5>
                                <h5>28</h5>
                            </div>
                        </div>
                        <div className="col-sm-1">
                           <h5 style={{fontSize: '3rem'}}>|</h5>
                        </div>
                        <div className="col-sm-4">
                           <h5><a href="/" className="event-links"> Yoga and Mindfulness </a></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventOverview;