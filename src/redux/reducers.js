import { combineReducers } from "redux";

import { themeReducer } from "./reducers/theme";
import { tokenReducer } from "./reducers/token";

export const allReducers = combineReducers({
  theme: themeReducer,
  token: tokenReducer,
});
