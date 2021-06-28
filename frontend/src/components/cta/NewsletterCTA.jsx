import React from 'react';
import '../../Pages/pattonUniverCity.css';

const NewsletterCTA = () => {
    return (
        <section class="newsletter-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-lg-7">
                        <div class="newsletter-group section-title mb-md-0">
                            <h3>Newsletter</h3>
                            <p>Subscribe and get the latest news and useful tips, advice and best offer.</p>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-5">
                        <form class="newsletter">
                            <input type="text" placeholder="Enter your email" />
                            <button class="site-btn">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterCTA;