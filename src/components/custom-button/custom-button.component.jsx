import React from "react";

import "./custom-button.styles.scss";

export default function CustomButton({ children }) {
  return <button className="custom-button">{children}</button>;
}
