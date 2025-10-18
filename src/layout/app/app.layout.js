// src/layout/app/app.layout.js
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Box,
} from "@mui/material";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";

export const AppLayout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Box>{children}</Box>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
