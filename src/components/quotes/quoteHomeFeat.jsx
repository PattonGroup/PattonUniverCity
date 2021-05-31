import React from 'react';
import Elvonte from '../../assets/images/elvonte.png';
import './quote.css';

const QuoteHomeFeat = () => {
    return (
        <>
        <div className="quote-section pt-5 p-b5">
            <div className="container-fluid">
                    <div className="feature-one row">
                        <div className="col-md-6">
                            <img src={Elvonte} alt="President Elvonte" />
                        </div>
                        <div className="col-md-6">
                            <p className="quote-info">
                            Mindfulness is the simple process of noticing new things about the familiar. 
                            When we notice actively, we become sensitive to perspective and change.”
                            </p>
                            <p className="quote-info-contact">Elvonte Patton, Professor of Education</p>
                            <div >
                                <button className="quote-btn">→</button>
                                <a href="/" className="quote-link">Learn more about Professor Elvonte</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </>
    )
}

export default QuoteHomeFeat;