import React from 'react';
import UpcomingEvent from '../card/upcomingEvent';
import Devevent from '../../assets/images/devevent.jpg';
import deveventData from './deveventData';
import './devevent.css';

const DeveventOverview = () => {
  return (
    <>
    <UpcomingEvent />    
       {/* <section className="devevent-section">
        <h1 className="devevent-title">UPCOMING EVENTS</h1>
        <div className="devevent-subtitle">Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</div>
            <div className="container"> 
              <div className="row">   
                           
                  <div className="col-md-6 devevent-card">
                    <div>
                      <img className="devevent-img img-fluid img-thumbnail" src={Devevent} alt="Party" width="500px" height="500px"/>
                    </div>
                    <div className="devevent-card-overlay">
                      <div className="text">card overlay text</div>
                    </div>
                  </div>
                 
                  
                   <div className="col-md-6 devevent-card">
                      <div>
                      <img className="devevent-img img-fluid img-thumbnail" src={Devevent} alt="Party" width="500px" height="500px"/>
                    </div>
                    <div className="devevent-card-overlay">
                      <div className="text">card overlay text</div>
                    </div>
                  </div>
                 </div> 
                 <div className="row">
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
                        <h5><a href="/" className="devevent-links">Summer Phonics Class for Kids</a></h5>
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
                        <h5><a href="/" className="devevent-links"> Yoga and Mindfulness </a></h5>
                    </div>
                </div> 
            </div>
</section> */}
  </>
  )
}

export default DeveventOverview;