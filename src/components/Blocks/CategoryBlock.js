import React from "react";
import "../style/Category.scss";
import Col from "react-bootstrap/Col";

const Category = (props) => {
  return (
    <Col
      xs={4}
      md={3}
      lg={1}
      className={`category-container ${props.className}`}
    >
      <a href="/">
        <div className="category">
          <img
            className="category-img"
            src={props.img}
            alt={props.alt}
          />
          <div className="category-type">{props.type}</div>
        </div>
      </a>
    </Col>
  );
};

export default Category;
