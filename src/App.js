import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    colors,
    Box,
} from "@mui/material";

import Navbar from "./components/navbar.component";

import HomePage from "./pages/home.page";
import PanelPage from "./pages/panel.page";
import AuthenticationPage from "./pages/authentication.page";

function App() {
    const mode = "light";

    const theme = createTheme({
        palette: {
            mode,
            background: {
                default: mode === "light" ? colors.blueGrey[100] : colors.grey[900],
            },
            primary: {
                main: mode === "light" ? colors.blueGrey[800] : colors.blueGrey[500],
            },
        },
        typography: {
            fontFamily: "Quicksand, Boogaloo, Meow Script, Patrick Hand",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Box>
                    <Switch>
                        <Route path="/" exact><HomePage /></Route>
                        <Route path="/panel" exact><PanelPage /></Route>
                        <Route path="/authentication" exact><AuthenticationPage /></Route>
                    </Switch>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
