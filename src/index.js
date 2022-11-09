import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux/storage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
