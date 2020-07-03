import React from "react";
import "../style/components-style/Companies.scss";
import "../style/Main.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Companies = () => {
  return (
    <div className="our_container p-0
    ">
      <Row className="m-0">
        <div className="companies">
          <Col className="company_span col-md-auto">
            <span>As used by</span>
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
              alt="amazon"
            />
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/microsoft.svg"
              alt="microsoft"
            />
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
              alt="facebook"
            />
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
              alt="deloitte"
            />
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/novo-nordisk-logo2.svg"
              alt="novo"
            />
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo2.svg"
              alt="nasa"
            />
          </Col>
          <Col >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
              alt="ibm"
            />
          </Col>
          <Col className="" >
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg"
              alt="airbus"
            />
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Companies;
