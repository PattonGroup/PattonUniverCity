import React from 'react';
import Contentbar from '../../components/navbar/content';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import AdmissionApply from '../../components/form/admissionApply';
import './home.css';

const PattonUniverCity = ({ authenticated, logout }) => {
    return (
        <> 
            <Contentbar/>
            <Navbar authenticated={authenticated} logout={logout} />
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
            <AdmissionApply/>
            <Footer/>
           
        </>
    )
}

export default PattonUniverCity