import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style/GetWorkDone.scss";
import { Category } from "./Blocks/CategoryBlock";

const GetWorkDone = () => {
  return (
    <div
      className="get-work-done"
      title="Hir FreeLancers & Find FreeLancing Jobs Online"
    >
      <div className="our-container p-0">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="gwd-header">
              Get work done in over 1350 different categories
            </h2>
          </Col>
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-php.svg"
            alt="php"
            type="PHP"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-website-design.svg"
            alt="website design"
            type="Website Design"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-graphic-design.svg"
            alt="graphic design"
            type="Graphic Design"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-mobile-apps.svg"
            alt="mobile apps"
            type="Mobile Apps"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-android.svg"
            alt="android"
            type="Android"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-iphone-apps.svg"
            alt="iphone apps"
            type="Iphone Apps"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-photoshop.svg"
            alt="photoshop"
            type="PhotoShop"
          />
          <Category
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-logo-design.svg"
            alt="logo design"
            type="Logo Design"
          />
          <Category
            className="hide-sm"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-article-writing.svg"
            alt="article writing"
            type="Article Writing"
          />
          <Category
            className="hide-sm"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-data-entry.svg"
            alt="data entry"
            type="Data Entry"
          />
          <Category
            className="hide-sm"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-internet-marketing.svg"
            alt="internet-marketing"
            type="Internet Marketing"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-seo.svg"
            alt="seo"
            type="SEO"
          />
          <Col xs={4} md={3} lg={1} className="hire-more col-padding">
            <a href="/">
              <div className="cat">
                <img
                  className="cat-img"
                  src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-more.svg"
                  alt="hire more"
                />
                <div className="cat-type">Hire More</div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-3d-modeling.svg"
            alt="3d modeling"
            type="3D Modeling"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-copy-writing.svg"
            alt="copy Wwriting"
            type="Copywriting"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-ghost-writing.svg"
            alt="ghost writing"
            type="Ghostwriting"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-linux.svg"
            alt="linux"
            type="Linux"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-aws.svg"
            alt="amazing web server"
            type="Amazing Web Server"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-banner-design.svg"
            alt="banner design"
            type="Banner Design"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-software-dev.svg"
            alt="software development"
            type="Software Development"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-accounting.svg"
            alt="accounting"
            type="Accounting"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-finance.svg"
            alt="finance"
            type="Finance"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-legal.svg"
            alt="legal"
            type="Legal"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-manufacturing.svg"
            alt="Manufacturing"
            type="Manufacturing"
          />
          <Category
            className="hide-md"
            img="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/hire-logistics.svg"
            alt="logistics"
            type="Logistics"
          />
        </Row>
      </div>
    </div>
  );
};

export default GetWorkDone;
