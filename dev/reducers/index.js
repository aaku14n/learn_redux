import { combineReducers } from "redux";
import userResource from "./reducersUser.js";

const allReducers = combineReducers({
  users: userResource
});

export default allReducers;
