import React from 'react';
import './overlay.css';

const Overlay = () => {
    return (
        <section id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-2">
                        <div className="block">
                            <h1 className="animated fadeInUp" data-testid="header-overlay">HOSEA &#38; PATTON DIGITAL ESTATES</h1>
                            <p className="animated fadeInUp" data-testid="paragraph-overlay">We believe growth and development. We love technology and will continue to move forward towards new development. We work closely with our clients to deliver the best possible solutions for their needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overlay;
