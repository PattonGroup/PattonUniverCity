import React from 'react';
import './home.css';

const PattonUniverCity = ({ authenticated, logout }) => {
    return (
        <>
           
            <div id="home" className="hero-area">
                <div className="bg-image bg-parallax overlay hero-img"></div>
                <div className="home-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-align-center">
                                <h1 className="white-text">Patton UniverCity</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default PattonUniverCity