import React from "react";
import { Image } from "react-bootstrap";

import "./style/NeedWorkDone.scss";
import "./style/Main.scss";

const NeedWorkDone = () => {
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
          <div className="job text-center">
            <div className="job-img">
              <Image
                src="https://www.f-cdn.com/assets/main/en/assets/home/need-work-done/post-a-job.svg"
                alt="Post a job"
              ></Image>
            </div>
            <span className="job-title">Post a job</span>
            <p className="job-description">
              It's easy. Simply post a job you need completed and receive
              competitive bids from freelancers within minutes.
            </p>
          </div>
          <div className="job text-center">
            <div className="job-img">
              <Image
                src="https://www.f-cdn.com/assets/main/en/assets/home/need-work-done/choose-freelancers.svg"
                alt="Choose freelancers"
              ></Image>
            </div>
            <span className="job-title">Choose freelancers</span>
            <p className="job-description">
              Whatever your needs, there will be a freelancer to get it done:
              from web design, mobile app development, virtual assistants,
              product manufacturing, and graphic design (and a whole lot more).
            </p>
          </div>
          <div className="job text-center">
            <div className="job-img">
              <Image
                src="https://www.f-cdn.com/assets/main/en/assets/home/need-work-done/pay-safely.svg"
                alt="Pay safely"
              ></Image>
            </div>
            <span className="job-title">Pay safely</span>
            <p className="job-description">
              With secure payments and thousands of reviewed professionals to
              choose from, Freelancer.com is the simplest and safest way to get
              work done online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedWorkDone;