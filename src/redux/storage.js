import { createStore } from "redux";

import { saveState, loadState } from "@/redux/localstorage";
import { allReducers } from "@/redux/reducers";

const presentedState = loadState();

export const store = createStore(allReducers, presentedState);

store.subscribe(() =>
  saveState({
    theme: store.getState().theme,
  })
);
