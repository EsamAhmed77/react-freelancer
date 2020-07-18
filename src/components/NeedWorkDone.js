import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { fetchNeedWorkDone } from "../redux/actions";

import "./style/NeedWorkDone.scss";
import "./style/Main.scss";

const NeedWorkDone = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNeedWorkDone());
  }, [dispatch]);

  const needWorkDone = useSelector((state) => state.needWorkDone);
  return (
    <div
      className="our-container"
      title="Hir FreeLancers & Find FreeLancing Jobs Online"
    >
      <div className="need-work-done text-center">
        <div className="work-title">
          <span>Need work done?</span>
        </div>
        <div className="jobs-type">
          {needWorkDone.map((item) => {
            return (
              <div className="job text-center">
                  <div className="job-img">
                    <Image src={item.img} alt={item.alt}></Image>
                  </div>
                  <span className="job-title">{item.alt}</span>
                  <p className="job-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NeedWorkDone;
