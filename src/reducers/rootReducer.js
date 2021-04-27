import { combineReducers } from "redux";
import caseReducer from "./caseReducer";
import listCountryReducer from "./listCountryReducer";
import caseCountryReducer from "./caseCountryReducer";

const rootReducers = combineReducers({
  case: caseReducer,
  listByCountry: listCountryReducer,
  caseCountry: caseCountryReducer,
});

export default rootReducers;
