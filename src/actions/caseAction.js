import Axios from "axios";
import * as actionTypes from "./actionType";

const apiWorldWideEndPoint = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/totals",
  headers: {
    "x-rapidapi-key": "2678840800msh5172d71fc9f2c9fp188627jsnc2f13bbe4a10",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
};

const apiGetListByCountry = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/help/countries",
  headers: {
    "x-rapidapi-key": "2678840800msh5172d71fc9f2c9fp188627jsnc2f13bbe4a10",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
};

const apiGetCaseByCountry = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/country/code",
  params: { code: "it" },
  headers: {
    "x-rapidapi-key": "2678840800msh5172d71fc9f2c9fp188627jsnc2f13bbe4a10",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
};

export const getWorldWideCase = () => (dispatch) => {
  Axios.request(apiWorldWideEndPoint).then((response) => {
    dispatch({
      type: actionTypes.GET_CASES_WORLDWIDE_SUCCESS,
      payload: response,
    });
    // console.log(response);
  });
  // .catch((error) => {
  //   dispatch(getWorldWideCaseError(error));
  // });
};

export const getWorldWideCaseError = (error) => ({
  type: actionTypes.GET_CASES_WORLDWIDE_FAILED,
  error: error,
});

export const getListByCountry = () => (dispatch) => {
  setTimeout(() => {
    Axios.request(apiGetListByCountry).then((response) => {
      dispatch({
        type: actionTypes.GET_LIST_BY_COUNTRY_SUCCESS,
        payload: response,
      });
      // console.log(response);
    });
  }, 3000);
};

export const getCaseByCountry = () => (dispatch) => {
  setTimeout(() => {
    Axios.request(apiGetCaseByCountry).then((response) => {
      dispatch({
        type: actionTypes.GET_CASES_BY_COUNTRY_SUCCESS,
        payload: response,
      });
      console.log(response);
    });
  }, 4000);
};
