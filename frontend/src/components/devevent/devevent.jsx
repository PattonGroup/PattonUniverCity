import React from 'react';
import UpcomingEvent from '../card/upcomingEvent';
import './devevent.css';

const DeveventOverview = () => {
  return (
    <>
    <section className="devevent-section">
      <h1 className="devevent-title">UPCOMING EVENTS</h1>
      <div className="devevent-subtitle">
        Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world
      </div>
      <div className="container"> 
        <div className="row"> 
          <UpcomingEvent />  
        </div> 
      </div>
    </section>      
  </>
  )
}

export default DeveventOverview;