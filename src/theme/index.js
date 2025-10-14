import { createTheme, colors } from "@mui/material";

const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: colors.grey[50],
      paper: colors.common.white,
    },
    primary: {
      main: colors.blue[700],
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[600],
    },
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: colors.blue[400],
    },
    text: {
      primary: colors.grey[100],
      secondary: colors.grey[400],
    },
  },
};

const themes = { light: lightTheme, dark: darkTheme };

const getTheme = (mode) => themes[mode];

const theme = (themeMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      ...getTheme(themeMode).palette,
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: { fontWeight: 600 },
      h2: { fontWeight: 500 },
      body1: { fontSize: "1rem" },
    },
  });

export { theme };
