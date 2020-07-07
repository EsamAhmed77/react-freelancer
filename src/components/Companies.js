import React from "react";

import "./style/Companies.scss";
import "./style/Main.scss";

const Companies = () => {
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
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/microsoft.svg"
              alt="Microsoft"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/sap.svg"
              alt="SAP"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/metlife.svg"
              alt="Met life"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/intel.svg"
              alt="Intel"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/boeing.svg"
              alt="Boeing"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/avery-dennison.svg"
              alt="Avery Dennison"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/pwc.svg"
              alt="PWC"
            />
          </div>
          <div className="companies-logo">
            <img
              className="img-fluid"
              src="https://www.f-cdn.com/assets/main/en/assets/home/companies/ge.svg"
              alt="GE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
