import React from 'react';
//import '../../pages/pattonUniverCity.css';

const BecomeInstructorCTA = () => {
    return (
        <section className="cta cta-one-area section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="wrap">
                        <h2 data-testid="header" className="text-white">Become an instructor</h2>
                        <p data-testid="paragraph">
                            There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck.
                        </p>
                        <a data-testid="button" className="main-button white" href="#">Apply Here</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BecomeInstructorCTA;