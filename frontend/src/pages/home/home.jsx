import React, { useState } from 'react';
import Contentbar from '../../components/navbar/content';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import QuoteHomeFeat from '../../components/quotes/quoteHomeFeat';
import TechSuite from '../../components/services/techSuite';
import EventOverview from '../../components/schoolevents/event';
import Stories from '../../components/grid/stories';
import GradSchoolSuite from '../../components/services/gradSchoolSuite';
import Enrollment from '../../components/services/enollment';
import AdmissionApply from '../../components/form/admissionApply';
import Footer from '../../components/footer/footer';
import './home.css';


//import { BrowserRouter as Router } from 'react-router-dom'

const PattonUniverCity = ({ authenticated, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <>
      <Contentbar toggle={toggle}/>
      <Navbar authenticated={authenticated} logout={logout} toggle={toggle} />        
      <div id="home" className="hero-area">
        <div className="bg-image bg-parallax overlay hero-img"></div>
        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-align-center">
                <h1 className="hero-text">Patton UniverCity</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteHomeFeat />
      <Stories />
      <GradSchoolSuite />
      <Enrollment />
      <TechSuite />
      <EventOverview />
      <AdmissionApply />
      <Footer />
    {/* </Router> */}
  </>
  );
};

export default PattonUniverCity;
