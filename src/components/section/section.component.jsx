import React from "react";

import "./section.styles.scss";

export default function Section({ BgColor, Position, children }) {
  return (
    <section
      className="section-container"
      style={{
        backgroundColor: `${BgColor}`,
        position: `${Position}`,
      }}
    >
      {children}
    </section>
  );
}
