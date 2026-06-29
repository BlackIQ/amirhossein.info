"use client";

import "@/styles/globals.css";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
// import { ThemeProvider } from "@/context/ThemeContext";

import { getTheme } from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getTheme("dark");

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </html>
  );
}
