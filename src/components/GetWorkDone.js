import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//
import "./style/GetWorkDone.scss";
import { Category } from "./Blocks/CategoryBlock";
import { fetchGetWorkDone } from "../redux/actions";

const GetWorkDone = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetWorkDone());
  }, [dispatch]);

  const getWorkDone = useSelector((state) => state.getWorkDone);
  return (
    <div
      className="get-work-done"
      title="Hir FreeLancers & Find FreeLancing Jobs Online"
    >
      <div className="our-container">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="gwd-header">
              Get work done in over 1350 different categories
            </h2>
          </Col>
          {getWorkDone.map(({ img, title, catClass, id }) => {
            return (
              <Category
                img={img}
                alt={title}
                type={title}
                className={catClass}
                key={id}
              />
            );
          })}
          <Col xs={4} md={3} lg={1} className="col-padding hire-more">
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
      </div>
    </div>
  );
};

export default GetWorkDone;