import Head from "next/head";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { useSelector } from "react-redux";

import { Navbar } from "@/components";
import { theme } from "@/theme";

export const AppLayout = ({ children }) => {
  const mode = useSelector((state) => state.theme);

  return (
    <>
      <Head>
        <title>Amirhossein Mohammadi </title>
      </Head>
      <ThemeProvider theme={theme(mode)}>
        <CssBaseline />
        <Box>
          <Navbar />
          {children}
        </Box>
      </ThemeProvider>
    </>
  );
};
