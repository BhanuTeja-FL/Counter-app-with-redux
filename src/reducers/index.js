import { combineReducers } from "redux";
import counterChangeHandler from "./counterChange";

const rootReducer = combineReducers({
  counterChangeHandler,
});

export default rootReducer;
