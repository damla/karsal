import "../global/global.scss";
import "../global/variables.scss";
import smoothscroll from "smoothscroll-polyfill";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
