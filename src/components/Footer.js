import React from "react";
import "./style/Main.scss";
import "./style/footer.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="footer">
      <div className="our-container p-0">
        <div className="top-footer">
          <Row>
            <Col className="col-padding" xs={12} lg={4}>
              <div className="tf-right">
                <div className="tf-logo border-bot">
                  <a href="/">
                    <img
                      src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="tf-lang-supp">
                  <div className="border-bot">
                    <i className="fas fa-globe"></i>
                    <a href="/">US (International) / English</a>
                  </div>
                  <div className="border-bot">
                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                    <a href="/">Help & Support</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="p-0" xs={12} lg={8}>
              <div className="tf-left">
                <Row>
                  <Col className="col-padding column" xs={12} md={3}>
                    <div className="list-title">Freelancer</div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Categories</a>
                      </li>
                      <li>
                        <a href="/">Projects</a>
                      </li>
                      <li>
                        <a href="/">Contests</a>
                      </li>
                      <li>
                        <a href="/">Freelancers</a>
                      </li>
                      <li>
                        <a href="/">Enterprise</a>
                      </li>
                      <li>
                        <a href="/">Preferred Freelancer Program</a>
                      </li>
                      <li>
                        <a href="/">Project Management</a>
                      </li>
                      <li>
                        <a href="/">Local Jobs</a>
                      </li>
                      <li>
                        <a href="/">Showcase</a>
                      </li>
                      <li>
                        <a href="/">API for Developers</a>
                      </li>
                      <li>
                        <a href="/">Get Verified</a>
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-padding column" xs={12} md={3}>
                    <div className="list-title">About</div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">About us</a>
                      </li>
                      <li>
                        <a href="/">How it Works</a>
                      </li>
                      <li>
                        <a href="/">Security</a>
                      </li>
                      <li>
                        <a href="/">Investor</a>
                      </li>
                      <li>
                        <a href="/">Sitemap</a>
                      </li>
                      <li>
                        <a href="/">Quotes</a>
                      </li>
                      <li>
                        <a href="/">News</a>
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-padding column" xs={12} md={3}>
                    <div className="list-title">Terms</div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="/">Copyright Policy</a>
                      </li>
                      <li>
                        <a href="/">Code of Conduct</a>
                      </li>
                      <li>
                        <a href="/">Fees and Charges</a>
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-padding column" xs={12} md={3}>
                    <div className="list-title">Apps</div>
                    <div className="stores">
                      <div className="app-store">
                        <a href="/">
                          <img
                            src="https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"
                            alt="app store"
                          />
                        </a>
                      </div>
                      <div className="google-play">
                        <a href="/">
                          <img
                            src="https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"
                            alt="google play"
                          />
                        </a>
                      </div>
                    </div>
                    <ul className="list-unstyled social-media">
                      <li>
                        <a href="/">
                          <i className="facebook fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="twitter fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="youTube fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="insta fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bot-footer">
        <div className="our-container p-0">
          <Row>
            <Col className="col-padding display-sm-none" md={6} lg={3}>
              <span className="total-number">45,838,735</span>
              <span className="user-job">Registered Users</span>
            </Col>
            <Col className="col-padding display-sm-none" md={6} lg={3}>
              <span className="total-number">45,838,735</span>
              <span className="user-job">Registered Users</span>
            </Col>
            <Col className="copyrights-col col-padding" xs={12} lg={6}>
              <span className="copyrights">
                Freelancer ® is a registered Trademark of Freelancer Technology
                Pty Limited (ACN 141 959 042)
              </span>
              <span className="copyrights">
                Copyright © 2020 Freelancer Technology Pty Limited (ACN 141 959
                042)
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
