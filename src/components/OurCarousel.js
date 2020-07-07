import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./style/Carousel.scss";
import "./style/Main.scss";

const OurCarousel = () => {
  return (
    <div className="our-carousel">
      <Carousel
        fade={true}
        indicators={false}
        interval={4000}
        pause={false}
        controls={false}
        title="Hir FreeLancers & Find FreeLancing Jobs Online"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="house-675.webp"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <div
            className="our-container d-flex
          "
          >
            <div className="carousel_caption text-left">
              <h3 className="d-block">
                {" "}
                Hire the best freelancers for any job, online.
              </h3>
              <p className=" d-block">
                Millions of people use freelancer.com to turn their ideas into
                reality.
              </p>
              <a className="carousel-btn-1 d-inline-block" href="\">
                <span>hir a freelancer</span>
              </a>
              <a className="carousel-btn-2 d-inline-block" href="\">
                <span>earn money freelancing</span>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="house-675.webp"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <div
            className="our-container d-flex
          "
          >
            <div className="carousel_caption text-left">
              <h3 className="d-block">
                {" "}
                Hire the best freelancers for any job, online.
              </h3>
              <p className=" d-block">
                Millions of people use freelancer.com to turn their ideas into
                reality.
              </p>
              <a className="carousel-btn-1 d-inline-block" href="\">
                <span>hir a freelancer</span>
              </a>
              <a className="carousel-btn-2 d-inline-block" href="\">
                <span>earn money freelancing</span>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="house-675.webp"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <div
            className="our-container d-flex
          "
          >
            <div className="carousel_caption text-left">
              <h3 className="d-block">
                {" "}
                Hire the best freelancers for any job, online.
              </h3>
              <p className=" d-block">
                Millions of people use freelancer.com to turn their ideas into
                reality.
              </p>
              <a className="carousel-btn-1 d-inline-block" href="\">
                <span>hir a freelancer</span>
              </a>
              <a className="carousel-btn-2 d-inline-block" href="\">
                <span>earn money freelancing</span>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="house-675.webp"
            alt="Hir FreeLancers & Find FreeLancing Jobs Online"
            title="Hir FreeLancers & Find FreeLancing Jobs Online"
          />
          <h2>This architectural design cost $500 USD and took 15 days</h2>
          <div
            className="our-container d-flex
          "
          >
            <div className="carousel_caption text-left">
              <h3 className="d-block">
                {" "}
                Hire the best freelancers for any job, online.
              </h3>
              <p className=" d-block">
                Millions of people use freelancer.com to turn their ideas into
                reality.
              </p>
              <a className="carousel-btn-1 d-inline-block" href="\">
                <span>hir a freelancer</span>
              </a>
              <a className="carousel-btn-2 d-inline-block" href="\">
                <span>earn money freelancing</span>
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OurCarousel;
