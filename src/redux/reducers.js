import { combineReducers } from "redux";

import { themeReducer } from "./theme/reducer";

export const allReducers = combineReducers({
  theme: themeReducer,
});
