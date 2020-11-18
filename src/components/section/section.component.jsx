import React from "react";

import "./section.styles.scss";

export default function Section({ BgColor, Background, children }) {
  return (
    // TOOD: conditional styling will be added
    <section
      className="section-container"
      style={{
        backgroundColor: BgColor && `${BgColor}`,
        backgroundImage: Background && `url(${Background})`,
        backgroundPosition: Background && "center",
        backgroundRepeat: Background && "no-repeat",
        backgroundSize: Background && "cover",
      }}
    >
      {children}
    </section>
  );
}
