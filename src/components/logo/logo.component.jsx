import React from "react";
import { Link } from "react-router-dom";

import "./logo.styles.scss";

export default function Logo() {
  return (
    <Link className="logo-container" to="/">
      <img
        className="logo"
        src="/karsal/karsal-logo.png"
        alt="karsal-logo"
        width={250}
        height={70}
      />
    </Link>
  );
}
