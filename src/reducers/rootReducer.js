import { combineReducers } from "redux";
import caseReducer from "./caseReducer";
import listCountryReducer from "./listCountryReducer";

const rootReducers = combineReducers({
  case: caseReducer,
  listByCountry: listCountryReducer,
});

export default rootReducers;
