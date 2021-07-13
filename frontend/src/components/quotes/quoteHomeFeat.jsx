import React from 'react';
import './quote.css';

const QuoteHomeFeat = () => {
  return (
    <>
      <div className="quote-section pt-5 p-b5">
        <div className="container">
          <div className="feature-one row">
            <div className="col-md-6">
              <img src={'https://i.imgur.com/u9ggAMv.jpg'} alt="President Elvonte" />
              <span className="feature-one-caption"><strong>Photo</strong>: 4th year Patton U student, Bailey speaks at the campaign rally for 
                Beto O’Rouke during the 2018 Presidential Primaries.</span>
            </div>
            <div className="col-md-6">
              <p className="quote-info">
              We cannot predict with certainty the types of jobs that will 
              exist in the future, but we consistently provide students with 
              exposure to 21st century skills with the most authentic, unique, 
              and innovative learning experiences possible.”
              </p>
              <p className="quote-info-contact">
              Ashley B. Patton, M.S. - Co-Founder
              </p>
              <div>
                <button className="quote-btn">→</button>
                <a href="/" className="quote-link">
                  Learn more about Ashley
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteHomeFeat;
