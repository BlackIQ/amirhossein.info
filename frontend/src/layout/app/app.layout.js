import {
  Box,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { useThemeContext } from "@/context/ThemeContext";

export const AppLayout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
    </MuiThemeProvider>
  );
};
