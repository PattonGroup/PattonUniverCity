import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./services.css";

const GradSchoolSuite = () => {
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
								Innovative Education
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
						selectedItem={currentSlide}
						showArrows={false}
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
									src={"https://i.imgur.com/2GC8Qpa.jpg"}
									alt="Crypto Kids"
									width="600px"
									height="250px"
								/>
							</div>
							<div className="services-info" onClick={next}>
								<h5 data-testid="header1" className="services-subtitle">
									Crypto for Kids
								</h5>
								<p data-testid="paragraph1">
									This course teaches the basics of money and currency used
									throughout the world and how we are evolving economically into
									a cryptocurrency space. Students of all ages are invited to
									enroll in this course. This course is virtual.
								</p>
								<a className="services-link" href="/comingsoon">
									Tutoring {">"}
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
									src={"https://i.imgur.com/jgJX7TV.jpg"}
									alt="Youth Entrepreneurship"
									width="600px"
									height="250px"
								/>
							</div>
							<div className="services-info" onClick={next}>
								<h5 data-testid="header2" className="services-subtitle">
									Youth Entrepreneurship
								</h5>
								<p data-testid="paragraph2">
									This course allows students to identify their personal
									interests and possible career aspirations to uncover
									strategies to earn income through entrepreneurship. This
									course is currently virtual.
								</p>
								<a className="services-link " href="/comingsoon">
									College Coaching {">"}
								</a>
							</div>
						</div>
						<div className="services-item">
							<div onClick={prev}>
								<img
									data-testid="image3"
									className="services-img img-fluid img-thumbnail"
									src={"https://i.imgur.com/lrRP2aA.jpg"}
									alt="Academic Coaching"
									width="600px"
									height="250px"
								/>
							</div>
							<div className="services-info" onClick={next}>
								<h5 data-testid="header3" className="services-subtitle">
									Academic Coaching
								</h5>
								<p data-testid="paragraph3">
									This program is for students who will thrive from having
									personalized guidance from an educational professional during
									the school year. Coaches meet with students periodically in
									the week to keep them on schedule with assignments and tests
									in addition to teaching responsibility and independence.
									Tutorials are offered “as-needed”. The meetings are currently
									virtual.
								</p>
								<a className="services-link" href="/comingsoon">
									Mentoring {">"}
								</a>
							</div>
						</div>
					</Carousel>
				</div>
			</section>
		</>
	);
};

export default GradSchoolSuite;
