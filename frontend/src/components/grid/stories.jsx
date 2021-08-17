import React from 'react';
import './stories.css';
import Cryptobook from '../../assets/images/cryptobook.jpg';
import Mascot from '../../assets/images/mascot.png';
import PattonReportCover2 from '../../assets/images/cover2.jpeg';
import SummerGolf from '../../assets/images/summerGolf.jpeg';
import Vision from '../../assets/images/vision.jpeg';

const Stories = () => {

  return (
        <>
          <div className="container story-feature">
            <h2 data-testid="header-main">Patton U Today</h2>
            <h3 data-testid="subheader-main" className="story-subheading">The Latest Stories from Patton U</h3>              
            <main className="story-grid">
              <article className="article-one">
                <img data-testid="image1" src={'https://i.imgur.com/cI4fMAt.png'} className="img-fluid img-thumbnail amazonBook" alt="Sample spotlight"/>
                {/* <h5 className="article-one-title"><span>UniverCity Affairs</span></h5><br/> */}
                {/* <h6 className="article-one-subtitle"><span>Patton to continue 11 varsity sports</span></h6><br/> */}
              </article>
              <article>
                <a href="https://form.jotform.com/PattonUniverCity/coursecatalog" target="_blank" rel="noopener noreferrer">
                  <img data-testid="image2" src={Mascot} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                </a>
                <div className="story-text">
                  <h3 data-testid="header-article2">Summer 2021 Course Catalog is now available!</h3>
                  <p data-testid="paragraph-article2">Choose from a variety of courses for your student to learn this summer, especially if they are not currently 
                    active in summer school or some type of summer learning or activity. Sessions last 30 minutes to 1 hour and are 
                    in preparation for next school year!</p>
                </div>
              </article>
              <article>
                <img data-testid="image3" src={Cryptobook} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                <div className="story-text">
                  <h3 data-testid="header-article3">Virtual Book Club</h3>
                  <p data-testid="paragraph-article3">This course is geared towards students in grades 3-8 who want to build reading fluency, vocabulary, and reading comprehension. This is an excellent class for students preparing to take standardized tests! One course is approximately one hour. This course meets twice per week.</p>
                </div>
              </article>
              <article>
                <a href="https://form.jotform.com/PattonUniverCity/coursecatalog" target="_blank" rel="noopener noreferrer">
                  <img data-testid="image4" src={SummerGolf} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                </a>
                <div className="story-text">
                  <h3 data-testid="header-article4">Golf Lessons for Girls</h3>
                  <p data-testid="paragraph-article4">Golf Lessons for Girls ages 6-12 in Houston! Visit our Course Catalog to learn more and register!</p>
                </div>
              </article>
              <article>
                <img data-testid="image5" src={PattonReportCover2} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                <div className="story-text">
                  <h3 data-testid="header-article5">Patton Report</h3>
                  <p data-testid="paragraph-article5">Keep up with Patton U news with our monthly Patton Report. Learn about our Spotlight Student and other upcoming events.</p>
                </div>
              </article>
              <article className="article-one">
                <img data-testid="image6" src={Vision} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                {/* <h5 className="article-one-title"><span>UniverCity Affairs</span></h5><br/> */}
                {/* <h6 className="article-one-subtitle"><span>Patton to continue 11 varsity sports</span></h6><br/> */}
              </article>
            </main>
          </div>
    </>
  );
};

export default Stories;
