import React from 'react';
import Person1 from '../../assets/images/unnamed.png';
import Person2 from '../../assets/images/unnamed.png';
import Person3 from '../../assets/images/unnamed.png';

const Team = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Person2} alt="" />

                <h2>Ian</h2>
                <h3>IOS Lead</h3>
                <p>Over 9 years of IOS development in the industry.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Person1} alt="" />

                <h2>Dominique</h2>
                <h3>Project Manager</h3>
                <p> <strong>Degree:</strong> Masters in Management Information Systems <br /> <strong>Experience:</strong> G.A. Alumni Software Engineering Program</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Person3} alt="" />

                <h2>Elvonte</h2>
                <h3>UX/UI Lead</h3>
                <p> Developed designs for top #10 ranking apps in the IOS app store.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>


        </div>
    )
}

export default Team;