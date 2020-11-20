import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/karsal-logo.png";
import "./logo.styles.scss";

export default function Logo() {
  return (
    <Link className="logo-container" to="/">
      <img
        className="logo"
        src={logo}
        alt="karsal-logo"
        width={200}
        height={60}
      />
    </Link>
  );
}
