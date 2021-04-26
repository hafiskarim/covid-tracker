import * as actionTypes from "../actions/actionType";

const initialState = {
  listByCountryData: [],
};
const listCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_BY_COUNTRY_SUCCESS:
      console.log("action: ", action);
      return {
        ...state,
        listByCountryData: action.payload.data,
      };
    default:
      return state;
  }
};

export default listCountryReducer;
