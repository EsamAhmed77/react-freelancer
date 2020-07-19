import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//
import "./style/Main.scss";
import "./style/CrowdFavorite.scss";
//
import CardBlock from "./Blocks/CardBlock";
import { fetchCrowdFavorite } from "../redux/actions";

const CrowdFavorite = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCrowdFavorite());
  }, [dispatch]);

  const crowdFavorite = useSelector((state) => state.crowdFavorite);
  return (
    <div
      className="crowd-favorite"
      title="Hir FreeLancers & Find FreeLancing Jobs Online"
    >
      <div className="our-container">
        <Row className="mb-3 pr-3 pl-3">
          <Col xs={12} className="text-center">
            <h2 className="cf-title">Crowd favorites</h2>
            <h3 className="cf-popular-projects">
              Here are some of our most popular projects:
            </h3>
          </Col>
        </Row>
        <Row className="scroller">
          {crowdFavorite.map(({ id, img, title, price }) => {
            return (
              <Col key={id} className="padding-sm" xs={8} sm={6} md={6} lg={4}>
                <CardBlock src={img} title={title} price={price} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CrowdFavorite;
