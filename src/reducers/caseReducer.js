import * as actionTypes from "../actions/actionType";

const initialState = {
  caseData: [],
};

const caseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CASES_WORLDWIDE:
      console.log("action: ", action);
      return {
        ...state,
        caseData: action.payload.data,
      };
    default:
      return state;
  }
};

export default caseReducer;
