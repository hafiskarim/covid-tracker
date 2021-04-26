import Axios from "axios";
import * as actionTypes from "./actionType";

const apiEndPoint = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/totals",
  headers: {
    "x-rapidapi-key": "2678840800msh5172d71fc9f2c9fp188627jsnc2f13bbe4a10",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
};

export const getWorldWideCase = () => (dispatch) => {
  Axios.request(apiEndPoint).then((response) => {
    dispatch({
      type: actionTypes.GET_CASES_WORLDWIDE_SUCCESS,
      payload: response,
    });
  });
  // .catch((error) => {
  //   dispatch(getWorldWideCaseError(error));
  // });
};

export const getWorldWideCaseError = (error) => ({
  type: actionTypes.GET_CASES_WORLDWIDE_FAILED,
  error: error,
});
