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
                                <h5 data-testid="header-spotlight">Spotlight</h5>                                   
                                <img className="event-img img-fluid img-thumbnail" src={Spolight} alt="TentCity" width="600px" height="250px"/>
                                <br/><br/>
                                <p data-testid="paragraph1-spotlight">Student Name</p>
                                <p data-testid="paragraph2-spotlight">Student Description</p>
                            </div>
                        </div>
                        <div className="col-md-6 event-item">
                            <div className="">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h5 data-testid="header-online">Online Events</h5>
                                    <div>
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
                                                    <p data-testid="paragraph1-online">{e.event_description}</p>
                                                    <p>{e.student_description}</p>    
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
                            <h5 data-testid="header-dates">Important Dates</h5>
                        </div>
                        <hr/>
                        <div className="col-sm-1">
                            <div>
                                <h5 data-testid="header-month1">Jun. - July</h5>
                                <h5 data-testid="header-day1">28</h5>
                            </div>
                        </div>
                        <div className="col-sm-1">
                           <h5 data-testid="header-bar1" style={{fontSize: '3rem'}}>|</h5>
                        </div>
                        <div className="col-sm-4">
                            <h5><a href="/" className="event-links">Summer Phonics Class</a></h5>
                        </div>
                        <div className="col-sm-1">
                            <div>
                                <h5 data-testid="header-month2">Jun. - July</h5>
                                <h5 data-testid="header-day2">28</h5>
                            </div>
                        </div>
                        <div className="col-sm-1">
                           <h5 data-testid="header-bar2" style={{fontSize: '3rem'}}>|</h5>
                        </div>
                        <div className="col-sm-4">
                           <h5><a href="/" className="event-links">Yoga and Mindfulness</a></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventOverview;