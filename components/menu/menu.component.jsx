import "./menu.module.scss";
import classNames from "classnames";

export default function Menu({ children, align }) {
  return (
    <ul
      className={classNames("menu-container", {
        "menu-container__right": align === "right",
        "menu-container__left": align === "left",
      })}
    >
      {children}
    </ul>
  );
}
