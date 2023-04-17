import Head from "next/head";

import {
  ThemeProvider,
  CssBaseline,
  Box,
  Toolbar,
  Container,
} from "@mui/material";
import { useSelector } from "react-redux";

import { Panav } from "@/components";
import { adminTheme } from "@/theme";
import { API } from "@/api";

export const AdminLayout = ({ children }) => {
  const { theme, token } = useSelector((state) => state);

  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return (
    <>
      <Head>
        <title>Amirhossein Mohammadi - Panel</title>
      </Head>
      <ThemeProvider theme={adminTheme(theme)}>
        <CssBaseline />
        <Box>
          <Panav />
          <Toolbar />
          <Container sx={{ py: 2 }}>{children}</Container>
        </Box>
      </ThemeProvider>
    </>
  );
};
