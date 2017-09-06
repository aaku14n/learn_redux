import { combineReducers } from "redux";
import userReducers from "./userReducers";
import activeUser from "./activeReducers";
const allReducers = combineReducers({
  users: userReducers,
  activeUser: activeUser
});
export default allReducers;
