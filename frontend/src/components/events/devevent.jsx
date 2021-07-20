import React from 'react';
import UpcomingEvent from '../card/upcomingEvent';
import './devevent.css';

const DeveventOverview = () => {
  return (
    <>
    <section className="dev-event-section">
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1 classNameName="dev-event-title">UPCOMING EVENTS</h1>
            <p classNameName="dev-event-subtitle">
            Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world
            </p>
          </div>
        </div>
        <div className="row">
          <UpcomingEvent />  
            <div className="col-lg-12">
                <div className="text-center pt-lg-5 pt-3">
                <a href="/" className="btn btn-primary rounded-0 mt-3">View All Event</a>
                </div>
            </div>
        </div>
    </div>
</section>
  </>
  )
}

export default DeveventOverview;