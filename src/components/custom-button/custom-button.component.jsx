import React from "react";

export default function CustomButton({ children, scroll, inverted }) {
  return (
    <button
      className={`${scroll ? "custom-button" : ""}${
        inverted ? " inverted" : ""
      }`}
    >
      {children}
    </button>
  );
}
