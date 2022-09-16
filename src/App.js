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

function App() {
    const theme = createTheme({
        palette: {
            background: {
                default: colors.blueGrey[100],
            },
            primary: {
                main: colors.blueGrey[800],
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
                    </Switch>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
