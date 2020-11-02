import React from "react";

export default function CustomButton({ children, scroll }) {
  return scroll ? (
    <button className="custom-button">{children}</button>
  ) : (
    <button>{children}</button>
  );
}
