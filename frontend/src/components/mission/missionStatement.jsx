import React from 'react';
import './missionStatement.css';

const MissionStatement = () => {
    return (
        <section id="feature">
            <div className="container">
                <div className="row mission">
                    <div className="col-md-6 col-md-offset-6">
                        <h2>WE BELIEVE IN GREAT IDEAS</h2>
                        <p>Our mission is to empower every person and every organization on the planet to achieve more.</p>
                        <p>Our vision is to help people and businesses throughout the world realize their full potential.</p>
                        <p>And to organize the world's information and make it universally accessible and useful. That's why Search makes it easy to discover a broad range of information from a wide variety of sources. </p>
                        <a href="/portfolio" className="btn btn-view-works">View Works</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionStatement;