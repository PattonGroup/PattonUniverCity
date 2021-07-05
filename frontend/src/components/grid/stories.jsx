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
                <img src={Mascot} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Yoga and Mindfulness</h3>
                  <p>Students learn breathing strategies and various body movements to increase flexibility and to relieve stress. This session allows children to center themselves before school and learn coping strategies that will help guide them throughout their day. Meditation begins at 7:30am (CST) every week day morning, beginning June 28 through July 28. Each class is approximately 1/2 hour.</p>
                </div>
              </article>
              <article>
                <img src={PattonReportCover} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Virtual Book Club</h3>
                  <p>This course is geared towards students in grades 3-8 who want to build reading fluency, vocabulary, and reading comprehension. This is an excellent class for students preparing to take standardized tests! One course is approximately one hour. This course meets twice per week.</p>
                </div>
              </article>
              <article>
                <img src={SummerGolf} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Intro to Geometry</h3>
                  <p>This course will introduce rising 10th graders to new concepts that will be introduced in their Geometry classes next fall. A review of 2-D and 3-D shapes along with formulas to solve various equations will be introduced. Student will get the chance to start the next school year ahead of the game! Each session is $35 and last approximately 45mins-1hour. This class is virtual.</p>
                </div>
              </article>
              <article>
                <img src={PattonReportCover2} className="img-fluid img-thumbnail secondary" alt="Sample spotlight"/>
                <div class="story-text">
                  <h3>Summer Enrichment</h3>
                  <p>This class is 10 sessions long from June 28-July28, meeting twice per week. Students may choose a schedule that best suits their needs (Monday/Wednesday or Tuesday/Thursday). An instructor will meet with students virtually to close academic gaps in Reading, Math, or Science for 30-40 mins per session.</p>
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
