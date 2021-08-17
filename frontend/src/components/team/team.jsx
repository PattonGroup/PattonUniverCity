import React from 'react';
import Person1 from '../../assets/images/unnamed.png';
import Person2 from '../../assets/images/unnamed.png';
import Person3 from '../../assets/images/unnamed.png';

const Team = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Person1} alt="" data-testid="image1" />

                <h2 data-testid="header1-person1">Ian</h2>
                <h3 data-testid="header2-person1">IOS Lead</h3>
                <p data-testid="paragraph1-person1">Over 9 years of IOS development in the industry.</p>
                <p><a data-testid="button-person1" href="/" className="btn btn-secondary">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Person2} alt="" data-testid="image2" />

                <h2 data-testid="header1-person2">Dominique</h2>
                <h3 data-testid="header2-person2">Project Manager</h3>
                <p data-testid="paragraph1-person2"><strong>Degree:</strong> Masters in Management Information Systems <br /> <strong>Experience:</strong> G.A. Alumni Software Engineering Program</p>
                <p><a data-testid="button-person2" href="/"  className="btn btn-secondary">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Person3} alt="" data-testid="image3" />

                <h2 data-testid="header1-person3">Elvonte</h2>
                <h3 data-testid="header2-person3">UX/UI Lead</h3>
                <p data-testid="paragraph1-person3">Developed designs for top #10 ranking apps in the IOS app store.</p>
                <p><a data-testid="button-person3" href="/"  className="btn btn-secondary">View details &raquo;</a></p>
            </div>


        </div>
    )
}

export default Team;