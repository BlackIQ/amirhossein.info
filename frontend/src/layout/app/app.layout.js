import {Box, CssBaseline, ThemeProvider as MuiThemeProvider,} from "@mui/material";
import {ThemeProvider, useThemeContext} from "@/context/ThemeContext";

export const AppLayout = ({children}) => {
    const {theme} = useThemeContext();

    return (
        <ThemeProvider>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Box>{children}</Box>
            </MuiThemeProvider>
        </ThemeProvider>
    );
};
