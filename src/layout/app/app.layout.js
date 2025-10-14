import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import { theme } from "@/theme";

export const AppLayout = ({ children }) => {
  const themeMode = "light";

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <Box>{children}</Box>
    </ThemeProvider>
  );
};
