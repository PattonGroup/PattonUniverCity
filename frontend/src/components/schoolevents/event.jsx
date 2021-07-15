import React, { useState } from 'react';
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
                                <h5 className="event-title">Spotlight</h5>                                   
                                <img className="event-img img-fluid img-thumbnail" src={'https://i.imgur.com/Y8GSxAg.jpg'} alt="TentCity" width="600px" height="250px" />
                                <br/><br/>
                                <h6 className="event-subtile">Christian D. - 10th Grader</h6>
                                <p className="event-descrp">Christian is a rising 10th grader who loves theater. Christian is getting ahead of the school year by learning a few geometry skills that will 
                                    be introduced in the Fall. Christian is an honor roll student and has plans to keep it that way!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 event-item">
                            <div className="">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h5 className="event-title">Online Events</h5>
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
                                                    <h6 className="event-subtile">{e.event_description}</h6>
                                                    <p className="event-descrp">{e.student_desrciption}</p>    
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
                            <h5 className="event-title">Important Dates</h5>
                        </div>
                        <hr/>
                        <div className="col-sm-2">
                            <div className="event-date">
                                <h5>Jun. - July</h5>
                                <h5>28</h5>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h5>
                                <a href="https://form.jotform.com/PattonUniverCity/coursecatalog" 
                                target="_blank" rel="noopener noreferrer"
                                className="event-links">Summer Phonics Class for Kids</a>
                                </h5>
                        </div>
                        <div className="col-sm-2">
                            <div className="event-date">
                                <h5>Jun. - July</h5>
                                <h5>28</h5>
                            </div>
                        </div>
                        <div className="col-sm-3">
                           <h5>
                               <a href="https://form.jotform.com/PattonUniverCity/coursecatalog" 
                               target="_blank" rel="noopener noreferrer"
                               className="event-links"> Yoga and Mindfulness </a>
                               </h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventOverview;