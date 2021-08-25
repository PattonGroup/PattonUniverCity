import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./services.css";

const TechSuite = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prev = () => {
		setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
	};

	const next = () => {
		setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : currentSlide);
	};
	return (
		<>
			<section
				className="services-section spad"
				style={{ background: "whitesmoke" }}
			>
				<div className="services-cont">
					<div className="row services-header-cont">
						<div
							className="services-header"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
							}}
							data-aos="fade-down"
							data-aos-offset="0"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<h3 data-testid="header-main" className="service-title">
								The Future of Tech
							</h3>
							<p data-testid="subtitle-main" className="service-subtitle">
								Preparing students to make meaningful contributions to society
								as engaged citizens and leaders in a complex world
							</p>
						</div>
					</div>
					<Carousel
						showStatus={false}
						showThumbs={false}
						swipeable={true}
						emulateTouch={true}
						centerMode={true}
						centerSlidePercentage={90}
						showArrows={false}
						selectedItem={currentSlide}
						autoPlay={false}
					>
						<div
							className="services-item"
							data-aos="fade-left"
							data-aos-offset="200"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<div onClick={prev}>
								<img
									data-testid="image1"
									className="services-img img-fluid img-thumbnail"
									src={"https://i.imgur.com/WNW7C0r.jpg"}
									alt="Software Development"
								/>
							</div>
							<div className="services-info" onClick={next}>
								<h5 data-testid="header1" className="services-subtitle">
									Software Development
								</h5>
								<p data-testid="paragraph1">
									We develop software developers fostering a learning
									environment to identify user needs, build programs, test out
									new software, and make improvements. Using various source
									debuggers and visual development environments to modify,
									write, and debug software for client applications. Along with
									creating documentation client software to create maintainable
									stand alone services.
								</p>
								<a className="services-link" href="/comingsoon">
									Software Development {">"}
								</a>
							</div>
						</div>
						<div
							className="services-item"
							data-aos="fade-left"
							data-aos-offset="200"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<div onClick={prev}>
								<img
									data-testid="image2"
									className="services-img img-fluid img-thumbnail"
									src={"https://i.imgur.com/rJG9EA9.jpg"}
									alt="Blockchain"
								/>
							</div>
							<div className="services-info" onClick={next}>
								<h5 data-testid="header2" className="services-subtitle">
									Blockchain
								</h5>
								<p data-testid="paragraph2">
									Blockchain has recently become synonymous with cryptocurrency,
									but its applications go far beyond financial transactions. The
									expansion of blockchain left a few under represented groups.
									We will shed light on this gap with our research and
									development focused on the creation of new applications for
									education and women in the ecosystem.
								</p>
								<a className="services-link" href="/comingsoon">
									Blockchain {">"}
								</a>
							</div>
						</div>
						<div
							className="services-item"
							data-aos="fade-left"
							data-aos-offset="200"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<div onClick={prev}>
								<img
									data-testid="image3"
									className="services-img img-fluid img-thumbnail"
									src={"https://i.imgur.com/3wpYwa6.jpg"}
									alt="Artificial Intelligence"
								/>
							</div>
							<div className="services-info" onClick={next}>
								<h5 data-testid="header3" className="services-subtitle">
									Artificial Intelligence
								</h5>
								<p data-testid="paragraph3">
									The AI Intelligence program provides a introduction to machine
									learning, as well as opportunities to explore theoretical and
									project-based learning in natural language processing and
									understanding. We will go from foundation to advanced skills
									in the principles that underlie AI including logic, knowledge
									representation, and probabilistic models.
								</p>
								<a className="services-link" href="/comingsoon">
									Artificial Intelligence {">"}
								</a>
							</div>
						</div>
					</Carousel>
				</div>
			</section>
		</>
	);
};

export default TechSuite;
