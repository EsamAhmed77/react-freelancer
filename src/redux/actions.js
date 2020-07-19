import api from "../utilities/API";

export const fetchCarousel = () => async (dispatch) => {
  const response = await api.get("/carousel");
  dispatch({ type: "FETCH_CAROUSEL", payload: response.data });
};

export const fetchAsUsedBy = () => async (dispatch) => {
  const response = await api.get("/AsUsedBy");
  dispatch({ type: "FETCH_ASUSEDBY", payload: response.data });
};

export const fetchNeedWorkDone = () => async (dispatch) => {
  const response = await api.get("/NeedWorkDone");
  dispatch({ type: "FETCH_NEEDWORKDONE", payload: response.data });
};

export const fetchWhatGreatAboutIt = () => async (dispatch) => {
  const response = await api.get("/WhatGreatAboutIt");
  dispatch({ type: "FETCH_WHATGREATABOUTIT", payload: response.data });
};

export const fetchCrowdFavorite = () => async (dispatch) => {
  const response = await api.get("/CrowdFavorite");
  dispatch({ type: "FETCH_CROWDFAVORITE", payload: response.data });
};

export const fetchGetWorkDone = () => async (dispatch) => {
  const response = await api.get("/GetWorkDone");
  dispatch({ type: "FETCH_GETWORKDONE", payload: response.data });
};

export const fetchApiEnterprise = () => async (dispatch) => {
  const response = await api.get("/Api-Enterprise");
  dispatch({ type: "FETCH_APIENTERPRISE", payload: response.data });
};

export const fetchTopJobsCategories = () => async (dispatch) => {
  const response = await api.get("/TopJobsCategories");
  dispatch({ type: "FETCH_TOPJOBSCATEGORIES", payload: response.data });
};
