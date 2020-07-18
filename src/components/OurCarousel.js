import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { fetchCarousel } from "../redux/actions";
//
import "./style/Carousel.scss";
import "./style/Main.scss";

const OurCarousel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarousel());
  }, [dispatch]);

  const carousel = useSelector((state) => state.carousel);
  return (
    <div className="our-carousel">
      <div className="our-container d-flex">
        {carousel.map(({ caption }) => {
          return (caption || []).map(({id, title, description, btns}) => {
            return (
              <div className="carousel_caption text-left" key={id}>
                <h3 className="d-block">{title}</h3>
                <p className=" d-block">{description}</p>
                {btns.map((btn) => {
                  return (
                      <a
                        className={"d-inline-block text-center" + btn.btnClass}
                        href="\"
                        key={btn.id}
                      >
                        <span>{btn.title}</span>
                      </a>
                  );
                })}
              </div>
            );
          });
        })}
      </div>
      <h2>This architectural design cost $500 USD and took 15 days</h2>
      <div className="overlay"></div>
      <Carousel
        fade={true}
        indicators={false}
        interval={4000}
        pause={false}
        controls={false}
        title="Hir FreeLancers & Find FreeLancing Jobs Online"
      >
        {(carousel || []).map(({ id, img }) => {
          return (
            <Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={img}
                alt="Hir FreeLancers & Find FreeLancing Jobs Online"
                title="Hir FreeLancers & Find FreeLancing Jobs Online"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default OurCarousel;
