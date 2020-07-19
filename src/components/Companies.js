import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsUsedBy } from "../redux/actions";

import "./style/Companies.scss";
import "./style/Main.scss";

const Companies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsUsedBy());
  }, [dispatch]);

  const asUsedBy = useSelector((state) => state.asUsedBy);
  return (
    <div className="AsUsedBy">
      <div
        className="our-container"
        title="Hir FreeLancers & Find FreeLancing Jobs Online"
      >
        <div className="companies">
          <div className="asUsedBy-title">
            <span>As used by</span>
          </div>
          {asUsedBy.map(({ img, alt, id }) => {
            return (
              <div className="companies-logo"  key={id}>
                <img className="img-fluid" src={img} alt={alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
