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
        pause={false}
        controls={false}
        title="Hir FreeLancers & Find FreeLancing Jobs Online"
      >
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="/nasa-675.jpg"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container p-0 m-0 text-left">
            <h3 className="d-block">Hire the best freelancers for any job, online.</h3>
            <p className=" d-block">
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1 d-inline-block" href="\">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2 d-inline-block" href="\">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="mobile-phone-675.jpg"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container p-0 m-0 text-left">
            <h3 className="d-block"> Hire the best freelancers for any job, online.</h3>
            <p className=" d-block">
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1 d-inline-block" href="\">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2 d-inline-block" href="\">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="house-675.webp"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container p-0 m-0 text-left">
            <h3 className="d-block"> Hire the best freelancers for any job, online.</h3>
            <p className=" d-block">
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1 d-inline-block" href="\">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2 d-inline-block" href="\">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src="magazine-675.jpg"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <Carousel.Caption className="our_container p-0 m-0 text-left">
            <h3 className="d-block"> Hire the best freelancers for any job, online.</h3>
            <p className=" d-block">
              Millions of people use freelancer.com to turn their ideas into
              reality.
            </p>
            <a className="carousel_btn_1 d-inline-block" href="\">
              <span>hir a freelancer</span>
            </a>
            <a className="carousel_btn_2 d-inline-block" href="\">
              <span>earn money freelancing</span>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OurCarousel;
