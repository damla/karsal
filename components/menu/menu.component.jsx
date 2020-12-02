import "./menu.styles.scss";
import classNames from "classnames";

export default function Menu({ children, align }) {
  return (
    <div
      className={classNames("menu-container", {
        "menu-container__right": align === "right",
        "menu-container__left": align === "left",
      })}
    >
      {children}
    </div>
  );
}
