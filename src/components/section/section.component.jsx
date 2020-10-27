import React from "react";

import "./section.styles.scss";

export default function Section({ BgColor, children }) {
  return (
    <section
      className="section-container"
      style={{
        backgroundColor: `${BgColor}`,
      }}
    >
      {children}
    </section>
  );
}
