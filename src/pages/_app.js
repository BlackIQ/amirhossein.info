import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/redux/storage";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
