import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import "./style/topJobsCategories.scss";
import { JobsCategory } from "./Blocks/CategoryBlock";
import { fetchTopJobsCategories } from "../redux/actions";

const TopJobsCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopJobsCategories());
  }, [dispatch]);

  const topJobsCategories = useSelector((state) => state.topJobsCategories);
  return (
    <div className="top-jobs-categories">
      <div className="our-container p-0">
        <div className="title-row text-center">
          <h2 className="jobs-category-header">Browse top job categories</h2>
        </div>
        <div className="jobs-row">
          {topJobsCategories.map(({ id, title }) => {
            return (
              <div key={id} className="jobs">
                <JobsCategory job={title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopJobsCategories;
