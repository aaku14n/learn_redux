import { combineReducers } from "redux";
import userReducers from "./userReducers";
const allReducers = combineReducers({
  users: userReducers
});
export default allReducers;
