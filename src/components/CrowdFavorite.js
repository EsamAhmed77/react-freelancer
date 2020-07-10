import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style/Main.scss";
import "./style/CrowdFavorite.scss";
import CardBlock from "./Blocks/CardBlock";

const CrowdFavorite = () => {
  return (
    <div className="crowd-favorite">
      <div className="our-container">
        <Row className="mb-3">
          <Col xs={12} className="text-center">
            <h2 className="cf-title">Crowd favorites</h2>
            <h3 className="cf-popular-projects">
              Here are some of our most popular projects:
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <CardBlock
              src="https://www.f-cdn.com/assets/main/en/assets/home/showcase/website-development.png"
              title="Website Development"
              price="From $300 USD"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardBlock
              src="https://www.f-cdn.com/assets/main/en/assets/home/showcase/graphic-design.png"
              title="Graphic Design "
              price="From $100 USD "
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardBlock
              src="https://www.f-cdn.com/assets/main/en/assets/home/showcase/logo-design.png"
              title="Logo Design"
              price="From $50 USD"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardBlock
              src="https://www.f-cdn.com/assets/main/en/assets/home/showcase/marketing.png"
              title="Marketing"
              price=" From $150 USD"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardBlock
              src="https://www.f-cdn.com/assets/main/en/assets/home/showcase/writing.png"
              title="Writing"
              price="From $50 USD"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardBlock
              src="https://www.f-cdn.com/assets/main/en/assets/home/showcase/mobile-app.png"
              title="Mobile App"
              price=" From $300 USD / hour"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CrowdFavorite;
