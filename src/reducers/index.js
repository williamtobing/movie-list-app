import { combineReducers } from "redux";

import searchReducer from "./search";
import yearReducer from "./year";

const allReducers = combineReducers({
  search: searchReducer,
  year: yearReducer,
});

export default allReducers;
