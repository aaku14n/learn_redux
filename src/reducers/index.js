import { combineReducers } from "redux";
import userResource from "./reducersUser";
const allReducers = combineReducers({
  users: userResource
});
