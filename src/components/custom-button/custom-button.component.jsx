import React from "react";
import { Link } from "react-router-dom";

import "./custom-button.styles.scss";

export default function CustomButton({ children }) {
  return <Link className="custom-button">{children}</Link>;
}
