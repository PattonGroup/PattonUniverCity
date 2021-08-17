import React from 'react';
import './pattonReportMainPosts.css';
import logo from '../../../assets/images/logo.png';
import pattonNewsData from '../pattonNewsData';

const PattonReportMainPosts = () => {
  return (
    <div className = "report-container">
        <div className = "title-logo-container">
            <img src = {logo} alt = "logo" width = "200px" height = "200px"/>
            <span>Patton <span className="title-target">Report</span></span>
        </div>
        <div className = "news-section">
            <div className = "main-news">
                <img src = {pattonNewsData[0].img_url} alt = "news_img"  height = "450px" />
                <div className = "news-text">
                    <h5><strong>{pattonNewsData[0].title}</strong></h5>
                    <span>{pattonNewsData[0].description}</span>
                </div>
            </div>
            <div className = "latest-news">
                <div>LATEST NEWS</div>
                <div>
                  <ul>
                    {
                      pattonNewsData.map(data => {
                        return(
                          <li>
                              <a href = "/">{data.title}</a> 
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PattonReportMainPosts;