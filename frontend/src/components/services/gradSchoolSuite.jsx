import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./services.css";
import Crypto from "../../pages/departments/crypto/crypto";

const GradSchoolSuite = () => {
  return (
    <>
      <section
        className="services-section spad"
        style={{ background: "whitesmoke" }}
      >
        <div className="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
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
          <div className="row mt-2">
            <div className="col-md-4 services-item">
              <div className="">
                <img
                  data-testid="image1"
                  className="services-img img-fluid img-thumbnail"
                  src={"https://i.imgur.com/2GC8Qpa.jpg"}
                  alt="Crypto Kids"
                  width="600px"
                  height="250px"
                />
                <br />
                <br />
                <h5 data-testid="header1" className="services-subtitle">
                  Crypto for Kids
                </h5>
                <p data-testid="paragraph1">
                  This course teaches the basics of money and currency used
                  throughout the world and how we are evolving economically into
                  a cryptocurrency space. Students of all ages are invited to
                  enroll in this course. This course is virtual.
                </p>
                {/* <a className="services-link" href="/">
                  Tutoring {">"}
                </a> */}
                <Link exact to="/cryptoAbout">
                  Tutoring {">"}{" "}
                </Link>
                <Router>
                  <Switch>
                    <Route exact path="/cryptoAbout" component={Crypto} />
                  </Switch>
                </Router>
              </div>
            </div>
            <div className="col-md-4 services-item">
              <div className="">
                <img
                  data-testid="image2"
                  className="services-img img-fluid img-thumbnail"
                  src={"https://i.imgur.com/jgJX7TV.jpg"}
                  alt="Youth Entrepreneurship"
                  width="600px"
                  height="250px"
                />
                <br />
                <br />
                <h5 data-testid="header2" className="services-subtitle">
                  Youth Entrepreneurship
                </h5>
                <p data-testid="paragraph2">
                  This course allows students to identify their personal
                  interests and possible career aspirations to uncover
                  strategies to earn income through entrepreneurship. This
                  course is currently virtual.
                </p>
                <a className="services-link " href="/">
                  College Coaching {">"}
                </a>
              </div>
            </div>
            <div className="col-md-4 services-item">
              <div className="">
                <img
                  data-testid="image3"
                  className="services-img img-fluid img-thumbnail"
                  src={"https://i.imgur.com/lrRP2aA.jpg"}
                  alt="Academic Coaching"
                  width="600px"
                  height="250px"
                />
                <br />
                <br />
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
                <a className="services-link" href="/">
                  Mentoring {">"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GradSchoolSuite;
