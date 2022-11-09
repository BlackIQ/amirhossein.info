import { createStore } from "redux";

import { saveState, loadState } from "./localstorage";
import { allReducers } from "./reducers";

const presentedState = loadState();

export const store = createStore(
  allReducers,
  presentedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() =>
  saveState({
    session: store.getState().session,
    user: store.getState().user,
    theme: store.getState().theme,
  })
);
