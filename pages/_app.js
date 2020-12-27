import "../global/global.scss";
import "../global/variables.scss";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps, router: { locale } }) {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
    localStorage.setItem("lang", locale);
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
