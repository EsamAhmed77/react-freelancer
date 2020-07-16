import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style/WhatGreatAboutIt.scss";
import "./style/Main.scss";

const WhatGreatAboutIt = () => {
  return (
    <div className="WGAI-container">
      <div
        className="our-container p-0"
        title="Hir FreeLancers & Find FreeLancing Jobs Online"
      >
        <div className="what-great-about-it">
          <Row className="mb-4 mr-0 ml-0">
            <Col xs={12} className="text-center">
              <span className="WGAI-title">What's great about it?</span>
            </Col>
          </Row>
          <Row className="mr-0 ml-0">
            <Col className="col-padding mb-4" xs={12} md={6} xl={4}>
              <div className="WGAI-items mb-3">
                <img
                  className="mr-3"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/browse-portfolios.svg"
                  alt="Browse Portfolios"
                />
                <span className="item-title">Browse portfolios</span>
              </div>
              <div>
                <p className="item-description">
                  Find professionals you can trust by browsing their samples of
                  previous work and reading their profile reviews.
                </p>
              </div>
            </Col>
            <Col className="col-padding mb-4" xs={12} md={6} xl={4}>
              <div className="WGAI-items mb-3">
                <img
                  className="mr-3"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/view-bids.svg"
                  alt="View bids"
                />
                <span className="item-title">View bids</span>
              </div>
              <div>
                <p className="item-description">
                  Receive free bids from our talented freelancers within
                  seconds.
                </p>
              </div>
            </Col>
            <Col className="col-padding mb-4" xs={12} md={6} xl={4}>
              <div className="WGAI-items mb-3">
                <img
                  className="mr-3"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/live-chat.svg"
                  alt="Live chat"
                />
                <span className="item-title">Live chat</span>
              </div>
              <div>
                <p className="item-description">
                  You can live chat with your freelancers to get constant
                  updates on the progress of your work.
                </p>
              </div>
            </Col>
            <Col className="col-padding mb-4" xs={12} md={6} xl={4}>
              <div className="WGAI-items mb-3">
                <img
                  className="mr-3"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/pay.svg"
                  alt="Pay for quality"
                />
                <span className="item-title">Pay for quality</span>
              </div>
              <div>
                <p className="item-description">
                  Pay for work when it has been completed and you're 100%
                  satisfied.
                </p>
              </div>
            </Col>
            <Col className="col-padding mb-4" xs={12} md={6} xl={4}>
              <div className="WGAI-items mb-3">
                <img
                  className="mr-3"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/track-progress.svg"
                  alt="Track progress"
                />
                <span className="item-title">Track progress</span>
              </div>
              <div>
                <p className="item-description">
                  Keep up-to-date and on-the-go with our time tracker, and
                  mobile app..
                </p>
              </div>
            </Col>
            <Col className="col-padding mb-4" xs={12} md={6} xl={4}>
              <div className="WGAI-items mb-3">
                <img
                  className="mr-3"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/support.svg"
                  alt="24/7 support"
                />
                <span className="item-title">24/7 support</span>
              </div>
              <div>
                <p className="item-description">
                  We're always here to help. Our support consists of real people
                  who are available 24/7.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WhatGreatAboutIt;
