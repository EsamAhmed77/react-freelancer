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
  dispatch({ type: "FETCH_NEEDWORKDONE", payload: response.data })
}