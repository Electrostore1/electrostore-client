/** @format */

import { combineReducers } from "redux";
import itemReducers from "../reducers/itemReducer";

export default combineReducers({
  item: itemReducers,
});
