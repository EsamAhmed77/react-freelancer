import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//
import "./style/api-enterprise.scss";
import { fetchApiEnterprise } from "../redux/actions";

const ApiEnterprise = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiEnterprise());
  }, [dispatch]);

  const apiEnterprise = useSelector((state) => state.apiEnterprise);
  return (
    <div
      className="api-enterprise"
      title="Hir FreeLancers & Find FreeLancing Jobs Online"
    >
      <div className="our-container p-0">
        <Row className=" justify-content-around">
          {apiEnterprise.map((item) => {
            return (
              <Col key={item.id} className="column" xs={12} sm={12} md={6}>
                <div className={item.Class || ""}>
                  <div className={item.Class + "-img"}></div>
                  <div className={item.Class + "-details"}>
                    <div className="details">
                      <span className={item.Class + "-title"}>
                        {item.title}
                      </span>
                      <h5 className={item.Class + "-header"}>{item.header}</h5>
                      <p className={item.Class + "-description"}>
                        {item.description}
                      </p>
                    </div>
                    <a className={item.Class + "-btn"} href="/">
                      {item.btn}
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ApiEnterprise;
