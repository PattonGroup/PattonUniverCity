import React, { useState } from 'react';
import Devevent from '../../assets/images/devevent.jpg';
import Spolight from '../../assets/images/spotlight.jpeg';
import deveventData from './deveventData';
import './devevent.css';

const DeveventOverview = () => {
    const [currentDevevent, setCurrentDevevent] = useState(0);
    const [isLeftArrow, setIsLeftArrow] = useState(false);
    const [isRightArrow, setIsRightArrow] = useState(false);
    const length = deveventData.length;
    
    const nextSlide = () => {
        setIsLeftArrow(false);
        setIsRightArrow(true);
        setCurrentDevevent(currentDevevent === length - 1 ? 0 : currentDevevent + 1);
    }
    const previousSlide = () => {
        setIsRightArrow(false);
        setIsLeftArrow(true);
        setCurrentDevevent(currentDevevent === 0? length - 1 : currentDevevent - 1);
    }
    

    return (
        <>
          <section className="devevent-section">
            <h1 className="devevent-title">UPCOMING EVENTS</h1>
            <div className="devevent-subtitle">Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 devevent-item">
                            <div>
                                                           
                                <img className="devevent-img img-fluid img-thumbnail" src={Devevent} alt="Party" width="500px" height="500px"/>
                                <br/><br/>
                                <p>Student Name</p>
                                <p>Student description</p>
                            </div>
                        </div>
                        <div className="col-md-6 devevent-item">
                            <div>
                                                          
                                <img className="devevent-img img-fluid img-thumbnail" src={Devevent} alt="Party" width="500px" height="500px"/>
                                <br/><br/>
                                <p>Student Name</p>
                                <p>Student description</p>
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
            </section>
        </>
    )
}

export default DeveventOverview;