import "frontend/src/styles/globals.css";
import { ThemeProvider } from "frontend/src/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
