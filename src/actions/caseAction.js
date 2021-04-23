import Axios from "axios";
import * as actionTypes from "./actionType";

const apiEndPoint = "https://api.covid19api.com/summary";

export const getWorldWideCase = () => (dispatch) => {
  Axios.get(`${apiEndPoint}`)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_CASES_WORLDWIDE_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch(getWorldWideCaseError(error));
    });
};

export const getWorldWideCaseError = (error) => ({
  type: actionTypes.GET_CASES_WORLDWIDE_FAILED,
  error: error,
});
