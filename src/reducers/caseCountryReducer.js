import * as actionTypes from "../actions/actionType";

const initialState = {
  caseCountryData: [],
};

const caseCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CASES_BY_COUNTRY_SUCCESS:
      console.log("action: ", action);
      return {
        ...state,
        caseCountryData: action.payload.data,
      };
    default:
      return state;
  }
};

export default caseCountryReducer;
