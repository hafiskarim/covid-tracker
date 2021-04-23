import * as actionTypes from "../actions/actionType";

const initialState = {
  caseData: [],
};

const caseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CASES_WORLDWIDE_SUCCESS:
      console.log("action: ", action);
      return {
        ...state,
        caseData: action.payload.data,
      };
    case actionTypes.GET_CASES_WORLDWIDE_FAILED:
      if (action.error.response.request.status === 404) {
        return {
          ...state,
        };
      }
      break;

    default:
      return state;
  }
};

export default caseReducer;
