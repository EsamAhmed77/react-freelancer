import React from "react";
import "../style/Category.scss";
import Col from "react-bootstrap/Col";
import "../style/Main.scss";

export const Category = (props) => {
  return (
    <Col className={`col-padding ${props.className}`} xs={4} md={3} lg={1}>
      <a href="/">
        <div className="category">
          <img className="category-img" src={props.img} alt={props.alt} />
          <div className="category-type">{props.type}</div>
        </div>
      </a>
    </Col>
  );
};

export const JobsCategory = (props) => {
  return (
    <div className="jobs-category-container">
      <div className="jobs-category">
        <i className="fas fa-caret-right"></i>
        <a className="jc-link" href="/">
          {props.job}
        </a>
      </div>
    </div>
  );
};