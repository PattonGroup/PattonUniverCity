import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';
import UpcomingEventData from './upcomingEventData';
import './upcomingEvent.css'

const UpcomingEvent = () => {
  return (
    <>
       { UpcomingEventData.map(event => {
                  return(
                    <div class="col-lg-6 col-md-6">
                    <div class="dev-event position-relative">
                        <div class="dev-thumb">
                            <img src={event.img_url} alt={event.description} />
                        </div>
                        <div class="dev-event-details">
                            <div class="d-flex mb-4">
                                <div class="dev-event-date"><span>{event.date.day}</span> {event.date.month}</div>
                                <div class="dev-event-time-location">
                                    <p><span class="dev-event-time mr-2"></span> <AiIcons.AiOutlineFieldTime /> {event.date.time}</p>
                                    <p><span class="dev-event-location mr-2"></span> <GoIcons.GoLocation /> {event.location}</p>
                                </div>
                            </div>
                            <p> {event.description}</p>
                            <a href="/" class="btn btn-primary rounded-0 mt-3">View Details</a>
                        </div>
                    </div>
                </div>
                )
       })}
    </>
  )
}

export default UpcomingEvent;