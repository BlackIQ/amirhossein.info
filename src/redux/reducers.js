import { combineReducers } from "redux";

import { sessionReducer } from "./session/reducer";
import { userReducer } from "./user/reducer";
import { themeReducer } from "./theme/reducer";

export const allReducers = combineReducers({
  session: sessionReducer,
  user: userReducer,
  theme: themeReducer,
});
