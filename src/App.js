import Router from "./router";
import { Layout } from "./layout";
import { theme } from "./theme";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
