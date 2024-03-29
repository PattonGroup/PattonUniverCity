import React from "react";
import "./quote.css";

const QuoteHomeFeat = () => {
	return (
		<>
			<div className="quote-section pt-5 p-b5">
				<div className="container">
					<div className="feature-one row">
						<div
							className="col-md-6"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<img
								data-testid="image"
								src={"https://i.imgur.com/u9ggAMv.jpg"}
								alt="President Elvonte"
							/>
							<span data-testid="caption" className="feature-one-caption">
								<strong>Photo</strong>: 4th year Patton U student, Bailey speaks
								at the campaign rally for Beto O’Rouke during the 2018
								Presidential Primaries.
							</span>
						</div>
						<div
							className="col-md-6 quote-container"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="200"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<p data-testid="paragraph1" className="quote-info">
								We cannot predict with certainty the types of jobs that will
								exist in the future, but we consistently provide students with
								exposure to 21st century skills with the most authentic, unique,
								and innovative learning experiences possible."
							</p>
							<p data-testid="paragraph2" className="quote-info-contact">
								Ashley B. Patton, M.S. - Co-Founder
							</p>
							<div>
								<button data-testid="button" className="quote-btn">
									→
								</button>
								<a href="/" className="quote-link">
									Learn more about Ashley
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuoteHomeFeat;
