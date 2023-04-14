import Head from "next/head";

import {
  ThemeProvider,
  CssBaseline,
  Box,
  Toolbar,
  Container,
} from "@mui/material";
import { useSelector } from "react-redux";

import { Navbar } from "@/components";
import { adminTheme } from "@/theme";

export const AdminLayout = ({ children }) => {
  const mode = useSelector((state) => state.theme);

  return (
    <>
      <Head>
        <title>Amirhossein Mohammadi - Admin</title>
      </Head>
      <ThemeProvider theme={adminTheme(mode)}>
        <CssBaseline />
        <Box>
          <Navbar />
          <Toolbar />
          <Container sx={{ py: 2 }}>{children}</Container>
        </Box>
      </ThemeProvider>
    </>
  );
};
