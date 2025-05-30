import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: colors.blueGrey[50],
    },
    primary: {
      main: colors.blueGrey[800],
    },
  },
  typography: {
    fontFamily:
      "Vazirmatn, Noto Serif Georgian, Boogaloo, Meow Script, Patrick Hand",
  },
});

export { theme };
