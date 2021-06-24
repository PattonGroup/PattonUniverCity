import React from 'react';
import './stories.css';
import Spolight from '../../assets/images/spotlight.jpeg';
import Cryptobook from '../../assets/images/cryptobook.jpg';
import Mascot from '../../assets/images/mascot.png';
import PattonReportCover from '../../assets/images/cover1.jpeg';
import PattonReportCover2 from '../../assets/images/cover2.jpeg';
import SummerGolf from '../../assets/images/summerGolf.jpeg';
import Vision from '../../assets/images/vision.jpeg';

const Stories = () => {

  return (
        <>
          <div className="container story-feature">
            <h2>Patton U Today</h2>
            <h3 className="story-subheading">The latest stories from Patton U</h3>              
            <main class="story-grid">
              <article className="article-one">
                <img src={Cryptobook} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                {/* <h5 className="article-one-title"><span>UniverCity Affairs</span></h5><br/> */}
                {/* <h6 className="article-one-subtitle"><span>Patton to continue 11 varsity sports</span></h6><br/> */}
              </article>
              <article>
                <img src={Mascot} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Completely Synergize</h3>
                  <p>Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
                </div>
              </article>
              <article>
                <img src={PattonReportCover} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Dynamically Procrastinate</h3>
                  <p>Completely synergize resource taxing relationships via premier niche markets.</p>
                </div>
              </article>
              <article>
                <img src={SummerGolf} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Best in class</h3>
                  <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
                </div>
              </article>
              <article>
                <img src={PattonReportCover2} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Dynamically innovate supply chains</h3>
                  <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
                </div>
              </article>
              <article className="article-one">
                <img src={Vision} className="img-fluid img-thumbnail" alt="Sample spotlight"/>
                {/* <h5 className="article-one-title"><span>UniverCity Affairs</span></h5><br/> */}
                {/* <h6 className="article-one-subtitle"><span>Patton to continue 11 varsity sports</span></h6><br/> */}
              </article>
            </main>
          </div>
    </>
  );
};

export default Stories;
