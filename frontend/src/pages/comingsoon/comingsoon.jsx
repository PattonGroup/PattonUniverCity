import React from 'react';
import './comingsoon.css';

const ComingSoon = () => {
    return (
        <div className="comingsoon">
            <video autoPlay muted loop>
                <source src="https://i.imgur.com/dsQcaMC.mp4" type="video/mp4"/>
            </video>
            <div className="comingsoon-header">
                <h1 className="comingsoon-title">Patton UniverCity</h1>
            </div>
            <div id="univercity">
                <h2>Coming Soon…</h2>
            </div>
            <a className="comingsoon-link" href="/">Go Back Home</a>
            {/* <nav className="comingsoon-nav"> */}
            {/* </nav> */}
        </div>
    )
}

export default ComingSoon;