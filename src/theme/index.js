import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: colors.grey[50],
    },
    primary: {
      main: colors.blue[700],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 500 },
    body1: { fontSize: "1rem" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export { theme };
