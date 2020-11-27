import "./menu.styles.scss";

export default function Menu({ children, align }) {
  return (
    <div
      className={`menu-container ${
        align === "right" ? "menu-container__right" : ""
      }
        ${align === "left" ? "menu-container__left" : ""}`}
    >
      {children}
    </div>
  );
}
