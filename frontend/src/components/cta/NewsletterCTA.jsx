import React from 'react';
//import '../../pages/pattonUniverCity.css';

const NewsletterCTA = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-7">
                        <div className="newsletter-group section-title mb-md-0">
                            <h3 data-testid="header">Newsletter</h3>
                            <p data-testid="paragraph">Subscribe and get the latest news and useful tips, advice and best offer.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <form className="newsletter">
                            <input type="text" placeholder="Enter your email" />
                            <button data-testid="button" className="site-btn">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterCTA;