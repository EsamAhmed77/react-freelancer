import React from "react";
import "../style/components-style/Companies.scss";
import "../style/Main.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Companies = () => {
  return (
    <div className="companies">
      <Container>
        <div className="bot_border">
          <Row>
            <div className="col-md-auto col-sm-12 company_span">
              <span>As used by</span>
            </div>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
                alt="amazon"
              />
            </Col>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
                alt="facebook"
              />
            </Col>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
                alt="deloitte"
              />
            </Col>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/novo-nordisk-logo2.svg"
                alt="novo"
              />
            </Col>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo2.svg"
                alt="nasa"
              />
            </Col>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
                alt="ibm"
              />
            </Col>
            <Col>
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg"
                alt="airbus"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Companies;
