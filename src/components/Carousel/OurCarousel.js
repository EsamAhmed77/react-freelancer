import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/components-style/Carousel.scss";
import "../style/Main.scss";

const OurCarousel = () => {
  return (
    <div className="our_carousel">
      <Carousel
        fade={true}
        indicators={false}
        interval={4000}
        pause={true}
        controls={false}
      >
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src={require("../../assets/images/house-675.webp")}
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container">
            <h3>Hire the best freelancers for any job, online.</h3>
            <p>
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1" href="#">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2" href="#">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src={require("../../assets/images/magazine-675.jpg")}
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container">
            <h3> Hire the best freelancers for any job, online.</h3>
            <p>
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1" href="#">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2" href="#">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src={require("../../assets/images/nasa-675.jpg")}
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container">
            <h3> Hire the best freelancers for any job, online.</h3>
            <p>
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1" href="#">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2" href="#">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src={require("../../assets/images/mobile-phone-675.jpg")}
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container">
            <h3> Hire the best freelancers for any job, online.</h3>
            <p>
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1" href="#">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2" href="#">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OurCarousel;
