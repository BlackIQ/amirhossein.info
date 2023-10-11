import { createTheme, colors } from "@mui/material";

export const appTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? colors.blueGrey[50] : colors.grey[900],
      },
      primary: {
        main: mode === "light" ? colors.blueGrey[800] : colors.blueGrey[500],
      },
    },
    typography: {
      fontFamily:
        "Vazirmatn, Noto Serif Georgian, Boogaloo, Meow Script, Patrick Hand",
    },
  });

export const adminTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? colors.teal[50] : colors.grey[900],
      },
      primary: {
        main: mode === "light" ? colors.teal[800] : colors.teal[500],
      },
    },
    typography: {
      fontFamily:
        "Vazirmatn, Noto Serif Georgian, Boogaloo, Meow Script, Patrick Hand",
    },
  });
