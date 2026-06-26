import {createTheme} from "@mui/material";

const baseTheme = {
    typography: {
        fontFamily: "'Inter', 'Caveat', 'JetBrains Mono', sans-serif",
        h1: {fontWeight: 700, letterSpacing: -0.5},
        h2: {fontWeight: 600},
        h3: {fontWeight: 600},
        h4: {fontWeight: 600},
        h5: {fontWeight: 600},
        h6: {fontWeight: 600},
    }, components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, boxShadow: "none", transition: "all 0.2s ease",
                },
            },
        }, MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, textTransform: "none", fontWeight: 500,
                },
            },
        }, MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none", borderBottom: "1px solid",
                },
            },
        },
    },
};

const darkThemePalette = {
    mode: "dark", primary: {
        main: "#3B82F6", dark: "#2563EB",
    }, secondary: {
        main: "#64748B",
    }, background: {
        default: "#0F172A", paper: "#1E2937",
    }, text: {
        primary: "#F1F5F9", secondary: "#94A3B8",
    }, divider: "#334155",
};

const lightThemePalette = {
    mode: "light", primary: {
        main: "#1E40AF",
    }, secondary: {
        main: "#64748B",
    }, background: {
        default: "#F8FAFC", paper: "#FFFFFF",
    }, text: {
        primary: "#0F172A", secondary: "#475569",
    }, divider: "#E2E8F0",
};

const getTheme = (mode) => createTheme({
    ...baseTheme, palette: mode === "dark" ? darkThemePalette : lightThemePalette,
});

export {getTheme};