import "@/styles/globals.css";
import {ThemeProvider} from "@/context/ThemeContext";
import {Analytics} from "@vercel/analytics/next";

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    );
}
