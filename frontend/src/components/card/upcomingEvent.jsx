import React from 'react';
import devevent from '../../assets/images/devevent.jpg';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';

const UpcomingEvent = () => {
  return (
    <>
      <div className="container"> 
        <div className="row">   
         {/* <div className="col-12 col-sm-8 col-md-6 col-lg-4">           */}
         <div className="col-12 col-md-6">          
          <div className="card">
            <img className="border border-3 border-dark" src={devevent} alt="Party" width="500px" height="500px"/>
            {/* <img className="upcomingEvent-img" src={devevent} alt="Party" width="500px" height="500px"/> */}
            {/* <img className="upcomingEvent-img img-fluid img-thumbnail" src={devevent} alt="Party" width="500px" height="500px"/> */}

            <div className="card-img-overlay bg-primary text-white min-vw-50 vh-50 vw-50">
            {/* <div className="card-img-overlay bg-primary text-white w-50 h-50"> */}
              {/* <div className="card-img-overlay bg-dark text-white"> */}
              {/* <div className="card-img-overlay d-flex flex-column justify-content-center"> */}
                       
               <div className="row">
                    <div className="col-sm-2">
                      
                        <div>
                            <p>15</p>
                            <p>Jun</p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <h5 style={{fontSize: '3rem'}}>|</h5>
                    </div>
                    <div>
                      <AiIcons.AiOutlineFieldTime />
                       <p>12:00 AM - 12:30 AM</p> 
                    </div>      
                    <div>
                      <GoIcons.GoLocation />
                      <p>Hilton Quebec</p>
                    </div>  
                    <p>
                      One make creepeth man for so bearing their firmament won't fowl meat over seas great
                    </p>
                    <div className="col-sm-5 link d-flex">
                      <a href="#" className="card-link text-light"> View Details</a>
                    </div>
                   </div> 
              
              
              
              {/* <h4 className="card-title">card overlay title</h4>
              <h6 className="card-subtitle mb-2">card overlay subtitle</h6>
              <p className="card-text">card overlay text</p> */}
              
            </div>
          </div>

          {/* <div className="card">
            <img className="border border-3 border-dark" src={devevent} alt="Party" width="500px" height="500px"/>
            <div className="card-img-overlay bg-dark text-white ">
              <h4 className="card-title">card overlay title</h4>
              <h6 className="card-subtitle mb-2">card overlay subtitle</h6>
              <p className="card-text">card overlay text</p>
              <div class="link d-flex">
                <a href="#" className="card-link text-light"> View Details</a>
              </div> */}
            </div>  
          </div>
   
      </div>  

      {/* <section className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card">
              <img className="card-img" src={Devevent} alt="Event" />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">Bologna</h4>
                <h6 className="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default UpcomingEvent;