import React, { useState } from "react";
import eventData from "./eventData";
import "./event.css";

const EventOverview = () => {
	const [currentEvent, setCurrentEvent] = useState(0);
	const [isLeftArrow, setIsLeftArrow] = useState(false);
	const [isRightArrow, setIsRightArrow] = useState(false);
	const length = eventData.length;

	const nextSlide = () => {
		setIsLeftArrow(false);
		setIsRightArrow(true);
		setCurrentEvent(currentEvent === length - 1 ? 0 : currentEvent + 1);
	};
	const previousSlide = () => {
		setIsRightArrow(false);
		setIsLeftArrow(true);
		setCurrentEvent(currentEvent === 0 ? length - 1 : currentEvent - 1);
	};

	const hoverAnimation = (event) => {
		const parent = event.currentTarget.firstChild;
		const image = parent.childNodes[1].firstChild;
		const header = parent.childNodes[3];
		image.classList.add("hovered-event-img");
		header.classList.add("hovered-event-header");
	};

	const unHover = (event) => {
		const parent = event.currentTarget.firstChild;
		const image = parent.childNodes[1].firstChild;
		const header = parent.childNodes[3];
		image.classList.remove("hovered-event-img");
		header.classList.remove("hovered-event-header");
	};

	const hoverCarouselAnimation = (event) => {
		const parent = event.currentTarget.firstChild;
		const image = parent.childNodes[0].firstChild;
		const header = parent.childNodes[2];
		image.classList.add("hovered-event-img");
		header.classList.add("hovered-event-header");
	};

	const unHoverCarousel = (event) => {
		const parent = event.currentTarget.firstChild;
		const image = parent.childNodes[0].firstChild;
		const header = parent.childNodes[2];
		image.classList.remove("hovered-event-img");
		header.classList.remove("hovered-event-header");
	};

	return (
		<>
			<section className="event-section">
				<div className="container">
					<div
						className="row"
						data-aos="fade"
						data-aos-offset="200"
						data-aos-duration="1500"
						data-aos-once="true"
					>
						<div
							className="col-md-6 event-item"
							onMouseOver={hoverAnimation}
							onMouseOut={unHover}
						>
							<div>
								<h5 className="header-spotlight" data-testid="header-spotlight">
									Spotlight
								</h5>
								<div className="event-image-container">
									<img
										data-testid="image-spotlight"
										className="event-img img-fluid img-thumbnail"
										src="https://i.imgur.com/Y8GSxAg.jpg"
										alt="TentCity"
										width="600px"
										height="250px"
									/>
								</div>
								<br />
								<p
									data-testid="paragraph1-spotlight"
									className="event-subheader"
								>
									Christian D. - 10th Grader
								</p>
								<p data-testid="paragraph2-spotlight">
									Christian is a rising 10th grader who loves theater. Christian
									is getting ahead of the school year by learning a few geometry
									skills that will be introduced in the Fall. Christian is an
									honor roll student and has plans to keep it that way!{" "}
								</p>
							</div>
						</div>
						<div className="col-md-6 event-item">
							<div className="">
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<h5 className="header-online" data-testid="header-online">
										Online Events
									</h5>
									<div className="arrows">
										<span
											className={
												isLeftArrow === true
													? "carousel-left-arrow active"
													: "carousel-left-arrow"
											}
											onClick={previousSlide}
										>
											&lt;{" "}
										</span>
										<span
											className={
												isRightArrow === true
													? "carousel-right-arrow active"
													: "carousel-right-arrow"
											}
											onClick={nextSlide}
										>
											{" "}
											&gt;
										</span>
									</div>
								</div>
								{eventData.map((e, i) => {
									return (
										<div
											className={
												i === currentEvent
													? "event-carousel active"
													: "event-carousel"
											}
											key={i}
											onMouseOver={hoverCarouselAnimation}
											onMouseOut={unHoverCarousel}
										>
											{i === currentEvent && (
												<div>
													<div className="event-image-container">
														<img
															data-testid="image-online"
															className="event-img img-fluid img-thumbnail"
															src={e.img_url}
															alt="event1"
															width="600px"
															height="250px"
														/>
													</div>
													<br />
													<p
														className="event-subheader"
														data-testid="paragraph1-online"
													>
														{e.event_description}
													</p>
													<p data-testid="paragraph2-online">
														{e.student_description}
													</p>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="row">
						<div
							className="dates-container row"
							data-aos="fade"
							data-aos-offset="200"
							data-aos-duration="1500"
							data-aos-once="true"
						>
							<div className="col-sm-6">
								<h5 data-testid="header-dates" className="event-title">
									Important Dates
								</h5>
							</div>
							<hr />
							<div className="col-sm-1">
								<div>
									<h5 className="event-date" data-testid="header-month1">
										Jun. - July
									</h5>
									<h5 data-testid="header-day1">28</h5>
								</div>
							</div>
							<div className="col-sm-4">
								<h5>
									<a href="/" className="event-links">
										Summer Phonics Class
									</a>
								</h5>
							</div>
							<div className="col-sm-1">
								<div>
									<h5 className="event-date" data-testid="header-month2">
										Jun. - July
									</h5>
									<h5 data-testid="header-day2">28</h5>
								</div>
							</div>

							<div className="col-sm-4">
								<h5>
									<a href="/" className="event-links">
										Yoga and Mindfulness
									</a>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default EventOverview;
