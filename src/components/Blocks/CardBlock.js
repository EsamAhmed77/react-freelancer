import React from "react";
import Card from "react-bootstrap/Card";
import "../style/Card.scss";

const CardBlock = (props) => {
  return (
    <Card title={props.title}>
      <div className="card-top">
        <Card.Img variant="top" src={props.src} />
        <Card.Link className="img-btn" href="/">
          Post a project like this
        </Card.Link>
      </div>
      <Card.Body>
        <Card.Title>
          <Card.Link className="mb-2" href="/">
            {props.title}
          </Card.Link>
        </Card.Title>
        <Card.Link href="/">{props.price}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardBlock;
