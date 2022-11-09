import { createTheme, colors } from "@mui/material";

const mode = "dark";

export const theme = createTheme({
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