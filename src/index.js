import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { store } from "./redux/storage";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </ReduxProvider>
);
