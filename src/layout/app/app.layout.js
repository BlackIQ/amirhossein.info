import { ThemeProvider, CssBaseline, Box } from "@mui/material";
// import { useSelector } from "react-redux";

import { appTheme } from "@/theme";

export const AppLayout = ({ children }) => {
  // const mode = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={appTheme("light")}>
        <CssBaseline />
        <Box>{children}</Box>
      </ThemeProvider>
    </>
  );
};
