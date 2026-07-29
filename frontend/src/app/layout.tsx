"use client";

import "@/styles/globals.css";

import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";

import { getTheme } from "@/theme";
import { ThemeProvider } from "@/context/theme.context";
import { useTheme } from "@/context/theme.context";
import { LanguageProvider } from "@/context/language.context";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { mode } = useTheme();
  const theme = getTheme(mode);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Amirhossein Mohammadi</title>
      </head>
      <body>
        <div>
          <ThemeProvider>
            <LanguageProvider>
              <LayoutContent>{children}</LayoutContent>
            </LanguageProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
