import React from "react";
import './crypto.css';

const Crypto = () => {
  return (
    <>
      <div className="container h-100">
        <p className="text-center heading">Department</p>
        <div className="row align-items-center h-100">
          <div className="col-6 mx-auto">
            <img
              className="services-img img-fluid img-thumbnail"
              src="https://i.imgur.com/2GC8Qpa.jpg"
              alt="TentCity"
              width="600px"
              height="250px"
            />
            <div className="row">
              <div className="col-md-8">
                <p>Content Describing the Picture</p>
              </div>
              <div className="col-md-4">
                <p>Who took the Picture</p>
              </div>
            </div>
            <div className="headline quote text-center">
              <h1>Article Headline</h1>
              <h3>By Author | Date</h3>
              <hr className="author"> </hr>
              <q>
                This course teaches the basics of money and currency used
                throughout the world and how we are evolving economically into a
                cryptocurrency space. Students of all ages are invited to enroll
                in this
              </q>
            </div>
          </div>
        </div>
        <div className="row tags">
          <div className="col-md-3">
            <h3 className="media">Media Contacts </h3>
          </div>
          <div className="col-md-3 name">
            <h6>Alexandra Konings</h6>
            <p>SCHOOL OF EARTH, ENERGY & ENVIRONMENTAL SCIENCES</p>
            <a href="konings@stanford.edu">konings@stanford.edu </a>,(650)
            736-2083
          </div>
          <div className="col-md-3 name">
            <h6>Danielle T. Tucker</h6>
            <p>SCHOOL OF EARTH, ENERGY & ENVIRONMENTAL SCIENCES</p>
            <a href="dttucker@stanford.edu">dttucker@stanford.edu </a>,(650)
            497-9541
          </div>
          <div className="col-md-3 name">
            <h6>Caroline Famiglietti</h6>
            <p>SCHOOL OF EARTH, ENERGY & ENVIRONMENTAL SCIENCES</p>
            <a href="mailto:cfamigli@stanford.edu">cfamigli@stanford.edu</a>
            ,(949) 726-2994
          </div>
        </div>
      </div>
      <hr> </hr>
      {/* <!--   You may like Section --> */}
      <section className="you-may-like">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-xs-3 mx-auto">
              <h3>YOU MAY ALSO LIKE</h3>
              <img
                className="services-img img-fluid img-thumbnail"
                src="https://i.imgur.com/2GC8Qpa.jpg"
                alt="TentCity"
                width="100px"
                height="100px"
              />
            </div>
            <div className="col-md-4 mx-auto">
              <img
                className="services-img img-fluid img-thumbnail"
                src="https://i.imgur.com/2GC8Qpa.jpg"
                alt="TentCity"
                width="100px"
                height="100px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crypto;
