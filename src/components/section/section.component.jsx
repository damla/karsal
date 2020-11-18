import React from "react";

import "./section.styles.scss";

export default function Section({ BgColor, Background, children }) {
  return (
    <section
      className="section-container"
      style={{
        // backgroundColor: `${BgColor}`,
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </section>
  );
}
