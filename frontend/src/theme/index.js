import { createTheme } from "@mui/material";

const neonBase = {
  typography: {
    fontFamily: "Lato, Caveat, sans-serif",
    h1: { fontWeight: 700, letterSpacing: -0.5 },
    h2: { fontWeight: 600, letterSpacing: -0.3 },
    h3: { fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: (theme) =>
              theme.palette.mode === "light"
                ? "0 8px 24px rgba(0, 166, 147, 0.3)"
                : "0 8px 24px rgba(0, 166, 147, 0.5)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          "&:hover": {
            boxShadow: (theme) =>
              theme.palette.mode === "light"
                ? "0 0 12px rgba(0, 166, 147, 0.5)"
                : "0 0 12px rgba(0, 166, 147, 0.7)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 4px 16px rgba(0, 166, 147, 0.2)"
              : "0 4px 16px rgba(0, 166, 147, 0.4)",
        },
      },
    },
  },
};

const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#00A693", // Persian green
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF2E63", // Neon pink
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F6F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#4A4A4A",
    },
    neonGlow: {
      main: "rgba(0, 166, 147, 0.3)",
      intense: "rgba(0, 166, 147, 0.7)",
    },
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#00D1B8", // Brighter Persian green for dark mode
      contrastText: "#000000",
    },
    secondary: {
      main: "#FF5C8A", // Brighter neon pink
      contrastText: "#000000",
    },
    background: {
      default: "#0A0F0D",
      paper: "#1A1F1D",
    },
    text: {
      primary: "#E6E6E6",
      secondary: "#A0A0A0",
    },
    neonGlow: {
      main: "rgba(0, 209, 184, 0.4)",
      intense: "rgba(0, 209, 184, 0.8)",
    },
  },
};

const themes = { light: lightTheme, dark: darkTheme };

const getTheme = (mode) =>
  createTheme({
    ...neonBase,
    palette: {
      mode,
      ...themes[mode].palette,
    },
  });

export { getTheme };
