import React from 'react';
import UpcomingEvent from '../card/upcomingEvent';
import './devevent.css';

const DeveventOverview = () => {
  return (
    <>
    <section class="dev-event-section">
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <h1 className="dev-event-title">UPCOMING EVENTS</h1>
            <p className="dev-event-subtitle">
            Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world
            </p>
          </div>
        </div>
        <div class="row">
          <UpcomingEvent />  
            <div class="col-lg-12">
                <div class="text-center pt-lg-5 pt-3">
                <a href="/" class="btn btn-primary rounded-0 mt-3">View All Event</a>
                </div>
            </div>
        </div>
    </div>
</section>
  </>
  )
}

export default DeveventOverview;