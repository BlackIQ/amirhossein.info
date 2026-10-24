import type { Metadata } from "next";

import "@/styles/globals.css";

import { LanguageProvider } from "@/context/language.context";

export const metadata: Metadata = {
  title: "Amirhossein Mohammadi",
  description:
    "Personal homepage of Amirhossein Mohammadi, Platform & Infrastructure Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
