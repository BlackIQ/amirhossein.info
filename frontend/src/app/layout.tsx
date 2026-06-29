"use client";

import "@/styles/globals.css";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { getTheme } from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getTheme("dark");

  return (
    <html lang="en">
      <head>
        <title>Amirhossein Mohammadi</title>
      </head>
      <body>
        <div>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
