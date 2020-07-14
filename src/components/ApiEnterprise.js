import React from "react";
import "./style/api-enterprise.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ApiEnterprise = () => {
  return (
    <div
      className="api-enterprise"
      title="Hir FreeLancers & Find FreeLancing Jobs Online"
    >
      <div className="our-container">
        <Row className=" justify-content-around">
          <Col className="column" xs={12} sm={12} md={6}>
            <div className="api">
              <div className="api-img"></div>
              <div className="api-details">
                <div className="details">
                  <span className="api-title">FREELANCER API</span>
                  <h5 className="api-header">
                    43 million professionals on demand
                  </h5>
                  <p className="api-description">
                    Why hire people when you can simply integrate our talented
                    cloud workforce instead?
                  </p>
                </div>
                <a className="api-btn" href="/">
                  view documentation
                </a>
              </div>
            </div>
          </Col>
          <Col className="column" xs={12} sm={12} md={6}>
            <div className="enterprise">
              <div className="enterprise-img"></div>
              <div className="enterprise-details">
                <div className="details">
                  <span className="enterprise-title">FREELANCER API</span>
                  <h5 className="enterprise-header">
                    Company budget? Get more done for less
                  </h5>
                  <p className="enterprise-description">
                    Use our workforce of 43 million to help your business
                    achieve more.
                  </p>
                </div>
                <a className="enterprise-btn" href="/">
                  contact us
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ApiEnterprise;
