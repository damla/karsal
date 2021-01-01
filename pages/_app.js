import "../global/global.scss";
import smoothscroll from "smoothscroll-polyfill";

// This default export is required in a new `pages/_app.js` file.
export function reportWebVitals(metric) {
  if (metric.label === "custom") {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

function App({ Component, pageProps, router: { locale } }) {
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
export default App;
