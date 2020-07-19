import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//
import { fetchWhatGreatAboutIt } from "../redux/actions";
import "./style/WhatGreatAboutIt.scss";
import "./style/Main.scss";

const WhatGreatAboutIt = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWhatGreatAboutIt());
  }, [dispatch]);

  const whatGreatAboutIt = useSelector((state) => state.whatGreatAboutIt);
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
            {whatGreatAboutIt.map(({id, img, title, description}) => {
              return (
                <Col key={id} className="mb-4" xs={12} md={6} xl={4}>
                  <div className="WGAI-items mb-3">
                    <img className="mr-3" src={img} alt={title} />
                    <span className="item-title">{title}</span>
                  </div>
                  <div>
                    <p className="item-description">{description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WhatGreatAboutIt;
