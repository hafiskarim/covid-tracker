import caseReducer from "./caseReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  case: caseReducer,
});

export default rootReducers;
