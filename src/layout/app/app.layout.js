import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import { theme } from "@/theme";

export const AppLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>{children}</Box>
    </ThemeProvider>
  );
};
