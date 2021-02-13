import { combineReducers } from "redux";

import searchReducer from "./search";
import yearReducer from "./year";
import isLoadingReducer from "./isLoading";

const allReducers = combineReducers({
  search: searchReducer,
  year: yearReducer,
  isLoading: isLoadingReducer,
});

export default allReducers;
